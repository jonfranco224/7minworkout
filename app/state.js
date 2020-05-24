export const ENV = window.location.href.includes('localhost:4000') ? 'DEV' : 'PROD'
export const APP = {}
export const VIEW = { render: undefined }

const initAppDefault = () => {
  APP.start = ''

  APP.activeSession = 0

  APP.sessions = [
    {
      title: '',
      min: 15,
      sec: 0,
      totalSec: 900,
      rounds: 1,
      stack: [
        { min: 0, sec: 30, totalSec: 30, title: "Jumping Jacks", bgColor: "#1dd1a1", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Wall Sit", bgColor: "#1dd1a1", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Push Ups", bgColor: "#1dd1a1", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Crunches", bgColor: "#1dd1a1", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Chair Steps", bgColor: "#f368e0", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Squats", bgColor: "#f368e0", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Chair Triceps", bgColor: "#f368e0", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Plank", bgColor: "#f368e0", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "High Knees", bgColor: "#feca57", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Lunge", bgColor: "#feca57", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Push Up Rotation", bgColor: "#feca57", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Side Plank", bgColor: "#feca57", collapsed: false }
      ]
    }
  ]

  Object.seal(APP)
}

const initViewDefault = () => {
  VIEW.sessionState = 0
  
  VIEW.timeIncrement = new Array(60).fill(0)

  VIEW.drag = {
    active: false,
    lastDropped: 0
  }

  // Timer View
  VIEW.locked = false
  VIEW.isPlaying = false
  VIEW.timerID = undefined
  VIEW.currRow = 0
  VIEW.currSecs = 0
  VIEW.currRound = 0
  VIEW.start = true
  VIEW.finish = false

  VIEW.min = 0
  VIEW.sec = 0

  VIEW.progressBar = ''

  Object.seal(VIEW)
}

export const newData = () => {
  initAppDefault()
  initViewDefault()
}