class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.some(collection => collection.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({
            callback, time, canCall: true
        });
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
    }
    getCurrentFormattedTime() {
        let now = new Date();
        let minute = now.getMinutes();
        let hours = now.getHours();
        let formatedMinute = minute < 10 ? '0' + minute : minute;
        let formatedHours = hours < 10 ? '0' + hours : hours;
        return `${formatedHours}:${formatedMinute}`
    }
    start() {
        if (this.intervalId !== null) {
            return this.intervalId;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }
    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}