import { h, render, Component } from 'preact'
import { APP, VIEW, ENV, newData } from './state'

const nextStage = (dontPersist) => {
  if (dontPersist && VIEW.isPlaying) {
    clearTimeout(VIEW.timerID)
    VIEW.isPlaying = !VIEW.isPlaying
  }

  if (VIEW.start) {
    VIEW.start = false
    VIEW.currRow = -1
  }

  const target = APP.sessions[APP.activeSession]

  const newRow = VIEW.currRow + 1 === target.stack.length ? 0 : VIEW.currRow + 1
  const newRound = newRow === 0 && VIEW.currRow >= 0 ? VIEW.currRound + 1 : VIEW.currRound

  if (newRound === target.rounds + 1 && newRow === 0) {
    VIEW.finish = true
    VIEW.render()
    return
  } else {
    VIEW.currRow = newRow
    VIEW.currRound = newRound
  }

  VIEW.currSecs = APP.sessions[APP.activeSession].stack[VIEW.currRow].totalSec
  VIEW.min = Math.floor(VIEW.currSecs / 60)
  VIEW.sec = VIEW.currSecs > 60 ? VIEW.currSecs % 60 : VIEW.currSecs

  VIEW.render()
}

const restartStage = () => {
  VIEW.currSecs = APP.sessions[APP.activeSession].stack[VIEW.currRow].totalSec
  VIEW.min = Math.floor(VIEW.currSecs / 60)
  VIEW.sec = VIEW.currSecs > 60 ? VIEW.currSecs % 60 : VIEW.currSecs
}

const lastStage = () => {
  if (VIEW.isPlaying) {
    clearTimeout(VIEW.timerID)
    VIEW.isPlaying = !VIEW.isPlaying
  }

  if (VIEW.finish) {
    VIEW.finish = false
    VIEW.currRow = APP.sessions[APP.activeSession].stack.length
  }

  const target = APP.sessions[APP.activeSession]

  const newRow = VIEW.currRow - 1 === -1 ? target.stack.length - 1 : VIEW.currRow - 1
  const newRound = VIEW.currRow <= 0 ? VIEW.currRound - 1 : VIEW.currRound
  
  if (newRow === 1 && newRound === -1) {
    VIEW.start = true
    VIEW.currSecs = 5
    VIEW.render()
    return
  } else {
    VIEW.currRow = newRow
    VIEW.currRound = newRound
  }

  VIEW.currSecs = APP.sessions[APP.activeSession].stack[VIEW.currRow].totalSec
  VIEW.min = Math.floor(VIEW.currSecs / 60)
  VIEW.sec = VIEW.currSecs > 60 ? VIEW.currSecs % 60 : VIEW.currSecs

  VIEW.render()
}

const timer = (start) => {
  const target = APP.sessions[APP.activeSession].stack[VIEW.currRow]

  if (start) {
    if (VIEW.currSecs <= 5) {
      var msg = new SpeechSynthesisUtterance(VIEW.currSecs)
      msg.volume = .25
      window.speechSynthesis.speak(msg);
    } else if (VIEW.currSecs === target.totalSec) {
      var msg = new SpeechSynthesisUtterance(target.title)
      window.speechSynthesis.speak(msg);
    }
  }
  
  VIEW.timerID = setTimeout(() => {
    VIEW.currSecs -= 1

    if (VIEW.currSecs === 0) {
      nextStage()
      if (VIEW.finish) {
        var msg = new SpeechSynthesisUtterance('Done. Great Job!')
        msg.volume = .25
        window.speechSynthesis.speak(msg);
        VIEW.isPlaying = !VIEW.isPlaying
      } else {
        const target = APP.sessions[APP.activeSession].stack[VIEW.currRow]
        var msg = new SpeechSynthesisUtterance(target.title)
        msg.volume = .25
        window.speechSynthesis.speak(msg);
      }
      
    } else if (VIEW.currSecs <= 5) {
      var msg = new SpeechSynthesisUtterance(VIEW.currSecs)
      msg.volume = .25
      window.speechSynthesis.speak(msg);
    }

    VIEW.min = Math.floor(VIEW.currSecs / 60)
    VIEW.sec = VIEW.currSecs > 60 ? VIEW.currSecs % 60 : VIEW.currSecs

    VIEW.render()
    if (!VIEW.finish) timer()
  }, 1000)
}

const togglePlay = () => {
  if (VIEW.isPlaying) {
    clearTimeout(VIEW.timerID)
  } else {
    timer(true)
  }
  
  VIEW.isPlaying = !VIEW.isPlaying
  VIEW.render()
}

const toggleLock = () => {
  VIEW.locked = !VIEW.locked

  VIEW.render()
}

const closeTimerView = () => {
  VIEW.sessionState = 0

  if (VIEW.isPlaying) {
    clearTimeout(VIEW.timerID)
  } 

  VIEW.isPlaying = !VIEW.isPlaying

  VIEW.render()
}

const startTimerView = () => {
  VIEW.sessionState = 1
  clearTimeout(VIEW.timerID)

  // Timer View Init
  VIEW.locked = false
  VIEW.isPlaying = false
  VIEW.timerID = undefined
  VIEW.currRow = 0
  VIEW.currRound = 0
  VIEW.currSecs = 5
  VIEW.start = true
  VIEW.finish = false

  VIEW.render()
}

const toggleCollapse = (i) => {
  APP.sessions[APP.activeSession].stack[i].collapsed = !APP.sessions[APP.activeSession].stack[i].collapsed
  VIEW.render()
}

const setTotalTime = () => {
  let totalSec = 0

  APP.sessions[APP.activeSession].stack.forEach(row => {
    totalSec += row.sec
    totalSec += (row.min * 60)
  })

  totalSec *= (APP.sessions[APP.activeSession].rounds + 1)

  APP.sessions[APP.activeSession].min = Math.floor(totalSec / 60)
  APP.sessions[APP.activeSession].sec = totalSec > 60 ? totalSec % 60 : totalSec
  APP.sessions[APP.activeSession].totalSec = totalSec
}

const newRow = () => {
  APP.sessions[APP.activeSession].stack.push({
    min: 0,
    sec: 0,
    totalSec: 0,
    title: 'Title',
    bgColor: '#2d98da',
    collapsed: false
  })

  setTotalTime()

  VIEW.render()
}

const deleteRow = (i) => {
  const confirm = window.confirm('Are you sure you want to delete?')
  
  if (confirm) {
    APP.sessions[APP.activeSession].stack.splice(i, 1)

    if (APP.sessions[APP.activeSession].stack.length === 0) {
      newRow()
    }

    setTotalTime()

    VIEW.render()
  }
}

const editTitle = (e, i) => {
  APP.sessions[APP.activeSession].stack[i].title = e.target.value

  VIEW.render()
}

const editTimeInterval = (minOrSec, e, i) => {
  const val = parseInt(e.target.value)
  const target = APP.sessions[APP.activeSession].stack[i]

  if (val >= 0 && val <= 60) {
    target[minOrSec] = val
    target['totalSec'] = (target.min * 60) + target.sec
  }

  setTotalTime()

  VIEW.render()
}

const editColor = (e, i) => {
  const val = e.target.value
  
  APP.sessions[APP.activeSession].stack[i].bgColor = e.target.value
  setTotalTime()
  
  VIEW.render()
}

const editRounds = (e) => {
  const val = parseInt(e.target.value)
  
  APP.sessions[APP.activeSession].rounds = val
  setTotalTime()

  VIEW.render()
}

const startDrag = (e) => {
  VIEW.drag.active = true
  VIEW.drag.lastDropped = parseInt(e.target.dataset.startindex)
  APP.sessions[APP.activeSession].stack[VIEW.drag.lastDropped].collapsed = false
  
  VIEW.render()
}

const resumeDrag = (e) => {
  const target = e.touches ? document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) : e.target

  if (target.dataset.dropindex) {
    const lastDropped = VIEW.drag.lastDropped
    const currDrop = parseInt(target.dataset.dropindex)
    
    if (lastDropped !== currDrop) {
      const temp = APP.sessions[APP.activeSession].stack[currDrop]
      APP.sessions[APP.activeSession].stack[currDrop] = APP.sessions[APP.activeSession].stack[lastDropped]
      APP.sessions[APP.activeSession].stack[lastDropped] = temp

      VIEW.drag.lastDropped = currDrop

      VIEW.render()
    }
  }
}

const endDrag = () => {
  VIEW.drag.active = false
  VIEW.render()

  document.body.classList.remove('grabbing')
}

class View extends Component{
  componentWillMount () {
    setTotalTime()
  }

  componentDidMount () {
    VIEW.render = () => {
      this.setState({}, () => {})
    }

    // Adding google analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-30199022-1');
  }

  render () {
    return (
      <div class='w-full h-full' style={VIEW.drag.active ? 'cursor: grabbing;' : 'auto'}>
        {VIEW.sessionState === 0 && <div
          class='fl-column h-full'
          style='background: rgb(248, 248, 251);'
          onTouchStart={(e) => { if (e.target.dataset.draggable) startDrag(e) }}
          onMouseDown={(e) => { if (e.target.dataset.draggable) startDrag(e) }}
          onTouchMove={(e) => { if (VIEW.drag.active) resumeDrag(e) }}
          onMouseMove={(e) => { if (VIEW.drag.active) resumeDrag(e) }}
          onTouchEnd={(e) => { endDrag() }}
          onMouseUp={(e) => { endDrag() }}
          onMouseLeave={(e) => { endDrag() }}
          >
          <div class='fl fl-justify-between' style='border-bottom: 1px solid #ced4da; background: white; min-height: 52px;'>
            <div class='fl fl-center-y' style='padding-left: 15px;'>
              <div class='fl fl-center-y p-v-15 p-h-5 w-full'>
                <p class='p-0 m-0 txt-left fl-1 fl' style='pointer-events: none;'>
                  <b>Interval Timer</b>
                </p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-pencil-alt fa-w-16 fa-3x"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" class=""></path></svg>
              </div>
              <a href='https://github.com/jonfranco224/7minworkout'>
                <button class='p-h-5 no-hover'>
                  <svg style='width: 20px; height: 20px;' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-github fa-w-16 fa-3x"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" class=""></path></svg>
                </button>
              </a>
            </div>
            
            <button
              class='p-h-20'
              onClick={() => {
                startTimerView()
              }}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" class=""></path></svg>
            </button>
          </div>
          <div class='fl' style='border-bottom: 1px solid #ced4da; border-top: 1px solid #ced4da; background: white; min-height: 52px; margin: 10px 0px;'>
            <div class='fl fl-center-y p-v-15 p-h-20 fl-1'>
              <p class='p-0 m-0 txt-left fl' style='pointer-events: none;'>
                <b>Total:
                  {APP.sessions[APP.activeSession].min < 10 ? '0' + APP.sessions[APP.activeSession].min : APP.sessions[APP.activeSession].min}
                  :{APP.sessions[APP.activeSession].sec < 10 ? '0' + APP.sessions[APP.activeSession].sec : APP.sessions[APP.activeSession].sec}
                </b>
              </p>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-pencil-alt fa-w-16 fa-3x"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" class=""></path></svg>
            </div>
            <div class='select' style='width: 115px;'>
              <p style='margin-right: 5px;'>Rounds</p>
              <select class='b-r-4' style='border: 0px;' value={APP.sessions[APP.activeSession].rounds} onInput={(e) => { editRounds(e) }}>
                <option value='0'>1</option>
                <option value='1'>2</option>
                <option value='2'>3</option>
                <option value='3'>4</option>
                <option value='4'>5</option>
              </select>
            </div>
            <button
              class='p-h-20'
              onClick={() => {
                newRow()
              }}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-plus fa-w-14 fa-3x"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" class=""></path></svg>
            </button>
          </div>
          <div class='fl-1 fl-column hide-scroll' style='overflow-y: scroll; border-top: 1px solid #ced4da; background: white;'>
            {
              APP.sessions[APP.activeSession].stack.map((row, i) => {
                return <div style={`border-bottom: 1px solid #ced4da; ${VIEW.drag.active && i === VIEW.drag.lastDropped  ? 'box-shadow: inset 0px 0px 2px 3px rgba(0, 0, 0, .1); background: rgba(0, 0, 0, .1); cursor: grabbing;' : 'background: white; cursor: auto;'};`} data-dropindex={i} >
                  <div class='fl' style={VIEW.drag.active ? 'pointer-events: none;' : ''}>
                    <button class='fl fl-center-y p-h-20 p-v-15 w-full' onClick={() => { toggleCollapse(i) }}>
                      <div style={`background-color:${row.bgColor}; pointer-events: none; width: 11px; height: 11px; border-radius: 100%; margin-right: 15px;`}></div>
                      <p class='p-0 m-0 txt-left fl-1 fl' style='pointer-events: none;'>
                        <span style='width: 50px; pointer-events: none;'>{row.min < 10 ? '0' + row.min : row.min}:{row.sec < 10 ? '0' + row.sec : row.sec}</span>
                        {row.title}
                      </p>
                      <svg style='pointer-events: none;' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-pencil-alt fa-w-16 fa-3x"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" class=""></path></svg>
                    </button>
                    <button class='p-h-20' style={`cursor: grab; ${VIEW.drag.active ? 'pointer-events: none;' : ''}`} data-draggable data-startindex={i} >
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-bars fa-w-14 fa-3x"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" class=""></path></svg>
                    </button>
                  </div>
                  
                  {row.collapsed && <div style={`padding: 0px 20px; border-top: 1px solid #ced4da; background: rgb(248, 248, 251);`}>
                    <div style='padding: 10px 0px;'>
                      <div style='padding: 3px 0px;' class='fl fl-justify-between fl-center-y'>
                        <p class='m-0' style='min-width: 100px; max-width: 100px;'>Time</p>
                        <div class='select fl-1' style='margin-right: -1px;'>
                          <select class='b-r-l-4' value={row.min} onInput={(e) => { editTimeInterval('min', e, i) }}>
                            {
                              VIEW.timeIncrement.map((step, i) => {
                                return <option value={i}>{i}</option>
                              })
                            }
                          </select>
                        </div>
                        <div class='select fl-1'>
                          <select class='b-r-r-4' value={row.sec} onInput={(e) => { editTimeInterval('sec', e, i) }}>
                            {
                              VIEW.timeIncrement.map((step, i) => {
                                return <option value={i}>{i}</option>
                              })
                            }
                          </select>
                        </div>
                      </div>
                      <div style='padding: 3px 0px;' class='fl fl-justify-between fl-center-y'>
                        <p class='m-0' style='width: 100px;'>Name</p>
                        <input class='fl-1 b-r-4' onInput={(e) => { editTitle(e, i) }} value={row.title}/>
                      </div>
                      {/* <div style='padding: 3px 0px;' class='fl fl-justify-between fl-center-y'>
                        <p class='m-0' style='width: 100px;'>Song</p>
                        <input class='fl-1 b-r-4' />
                      </div> */}
                      <div style='padding: 3px 0px;' class='fl fl-justify-between fl-center-y'>
                        <p class='m-0' style='width: 100px;'>Color</p>
                        <div class='fl-1 fl'>
                          <div class='b-r-l-4' style={`width: 30px; margin-right: -1px; border: 1px solid #ced4da; background: ${row.bgColor};`}></div>
                          <div class='select fl-1' style='margin-right: -1px;'>
                            <select value={row.bgColor} class='b-r-r-4' style=' text-transform: capitalize;' onInput={(e) => { editColor(e, i) }}>
                              <option value='#1dd1a1'>green</option>
                              <option value='#ff6b6b'>red</option>
                              <option value='#feca57'>yellow</option>
                              <option value='#2d98da'>blue</option>
                              <option value='#f368e0'>pink</option>
                              <option value='#a55eea'>purple</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => { deleteRow(i) }}
                        style='margin: 3px 0px; min-width: 38px; min-height: 38px; background: white; border: 1px solid #ced4da; border-radius: 3px;'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-trash fa-w-14 fa-3x"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" class=""></path></svg>
                      </button>
                    </div>
                  </div>}
                </div>
              })
            }
          </div>
        </div>}

        {VIEW.sessionState === 1 && <div class='fl-column h-full timerview' style={`transition: background 300ms ease; background: ${APP.sessions[APP.activeSession].stack[VIEW.currRow].bgColor};`}>
          <div class='fl' style={`height: 25px; background: black;`} >
            {console.log()}
            {
              new Array(APP.sessions[APP.activeSession].rounds + 1).fill(0).map((round, roundI) => {
                return APP.sessions[APP.activeSession].stack.map((row, rowI) => {
                  const session = APP.sessions[APP.activeSession]
                  const width = (row.totalSec / session.totalSec) * 100
                  const isActive = roundI === VIEW.currRound && rowI === VIEW.currRow

                  return <div style={`width: ${width}%; ${isActive ? `opacity: 1; border-bottom: 1px solid ${row.bgColor}; border-right: 1px solid white;` : 'opacity: .8; border-right: 1px solid white; border-bottom: 1px solid white;'} background: ${row.bgColor}; `}></div>
                })
              })
            }
          </div>
          <div class='fl fl-justify-between p-h-20 p-v-10'>
            {/* <div>
              <small>Elapsed</small>
              <h5 class='fl m-0' style='font-weight: 600;'>00<span class='txt-center' style='width: 10px;'>:</span>30</h5>
            </div> */}
            <div>
              <small>Interval</small>
              <h5 class='fl m-0' style='font-weight: 600;'>{VIEW.currRow + 1}<span class='txt-center' style='width: 20px;'>/</span>{APP.sessions[APP.activeSession].stack.length}</h5>
            </div>
            <div>
              <small>Round</small>
              <h5 class='fl m-0' style='font-weight: 600;'>{VIEW.currRound + 1}<span class='txt-center' style='width: 20px;'>/</span>{APP.sessions[APP.activeSession].rounds + 1}</h5>
            </div>
            {/* <div>
              <small>Remaining</small>
              <h5 class='fl m-0' style='font-weight: 600;'>29<span class='txt-center' style='width: 10px;'>:</span>30</h5>
            </div> */}
          </div>
          <div class='fl-1 fl fl-center'>
            <button class='timer-button' style={VIEW.locked ? 'pointer-events: none; opacity: .5;' : ''} onClick={() => {
                if (APP.sessions[APP.activeSession].stack[VIEW.currRow].totalSec - VIEW.currSecs <= 2) {
                  lastStage()
                } else {
                  restartStage()
                }
              }}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" class=""></path></svg>
            </button>
            <div class='fl-1 fl fl-center'>
              <div class='txt-center'>
                {VIEW.start && <h3>Get Ready</h3>}
                {VIEW.start && <h1>{VIEW.currSecs}</h1>}
                {!VIEW.start && !VIEW.finish && VIEW.currSecs <= 5 && <h1>{VIEW.currSecs}</h1>}
                {!VIEW.start && !VIEW.finish && VIEW.currSecs > 5 && <h1>{VIEW.min < 10 ? '0' + VIEW.min : VIEW.min}:{VIEW.sec < 10 ? '0' + VIEW.sec : VIEW.sec}</h1>}
                {!VIEW.start && !VIEW.finish && VIEW.currSecs > 5 && <h3>{APP.sessions[APP.activeSession].stack[VIEW.currRow].title}</h3>}
                {VIEW.finish && <h1>Finished</h1>}
              </div>
            </div>
            <button class='timer-button' style={VIEW.locked ? 'pointer-events: none; opacity: .5;' : ''} onClick={() => { nextStage(true) }}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
            </button>
          </div>
          <div class='fl fl-justify-between'>
            <button
              class='timer-button'
              style={VIEW.locked ? 'pointer-events: none; opacity: .5;' : ''}
              onClick={() => { closeTimerView() }}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11 fa-3x"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg>
            </button>
            <div class='fl'>
              {!VIEW.finish && <button
                class='timer-button'
                style={VIEW.locked ? 'pointer-events: none; opacity: .5;' : ''}
                onClick={() => { togglePlay() }}>
                {VIEW.isPlaying && <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-pause fa-w-14 fa-3x"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" class=""></path></svg>}
                {!VIEW.isPlaying && <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" class=""></path></svg>}
              </button>}
              {VIEW.finish && <button
                class='timer-button'
                style={VIEW.locked ? 'pointer-events: none; opacity: .5;' : ''}
                onClick={() => { startTimerView() }}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-redo fa-w-16 fa-3x"><path fill="currentColor" d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z" class=""></path></svg>
              </button>}
              <button
                class='timer-button'
                onClick={() => { toggleLock() }}>
                {!VIEW.locked && <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="unlock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-unlock fa-w-14 fa-3x"><path fill="currentColor" d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" class=""></path></svg>}
                {VIEW.locked && <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-lock fa-w-14 fa-3x"><path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" class=""></path></svg>}
              </button>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

const loadData = ({ onLoaded, onError }) => {
  //console.time('startRead')
  localforage.getItem('discotek').then((stored) => {
    //console.timeEnd('startRead')
    for (const key in stored) {
      APP[key] = stored[key]
    }

    onLoaded()
  }).catch(function(err) {
    console.log(err)
    onError()
  });
}

const saveData = () => {
  setTimeout(() => {
    console.time('startwrite')
    localforage.setItem('discotek', APP).then(function(value) {
      console.timeEnd('startwrite')
    }).catch(function(err) {
      console.log(err);
    });
  }, 50)
}

const onProgramStart = () => {
  console.log('Program started.')

  newData()
  render(<View />, document.body)
  
  loadData({
    onLoaded: () => {
      VIEW.render()
    },
    onError: () => {}
  })

  // setupKeyListeners()
  
  window.addEventListener('keyup', saveData)
  window.addEventListener('mouseup', saveData)
}

window.addEventListener('load', onProgramStart)
if (ENV === 'PROD') {
  window.addEventListener('beforeunload', (event) => {
    event.returnValue = `Are you sure you want to leave?`;
  });
}

