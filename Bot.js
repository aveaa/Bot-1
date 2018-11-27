module.exports = class Bot {
    constructor () {
        let self = this;
        this.client = new Discord.Client();
        this.client.login(process.env.TOKEN).catch((e) => {
            console.error(e);
            throw e;
        });
        this.client.on('message', self.onMessage);
    }

    onMessage() {

    }
};