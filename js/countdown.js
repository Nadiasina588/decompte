const MINUTES = 60
const HOURS = 60 * MINUTES
const DAYS = 24 * HOURS
const elements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
}

let previousDiff = {}
const countdown = document.querySelector('#countdown')
const launchDate = Date.parse(countdown.dataset.time) / 1000

function refreshCountdown() {
    const difference = launchDate - Date.now() / 1000
    if(difference <= 0) {
        document.location.reload()
        return
    }
    const diff = {
        days: Math.floor(difference / DAYS),
        hours: Math.floor(difference % DAYS / HOURS),
        minutes: Math.floor(difference % HOURS / MINUTES),
        seconds: Math.floor(difference % MINUTES)
    }
    updateDom(diff)
    window.setTimeout(() => {
        window.requestAnimationFrame(refreshCountdown)}, 1000)
}
function updateDom(diff) {
    Object.keys(diff).forEach((key) => {
        if (previousDiff[key] != diff[key]) {
            elements[key].innerText = diff[key]
           
        }
    })
    previousDiff = diff
   /* if (previousDiff.days != diff.days) {
        $days.innerText = diff.days
        console.log('updating days')
    }
    
    $hours.innertext = diff.hours
    $minutes.innerText = diff.minutes
    $seconds.innerText = diff.seconds
    */
}
refreshCountdown()