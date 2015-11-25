var express = require('express');
var router = express.Router();

router.route('/')
.get( (req, res, next) => {
    res.send("Testing, guagua.")
})
.post( (req, res, next) => {
    slack.respond(req.body, (hook)=>{
        // Do stuff here
        return {
            "text": "use "+ hook.trigger + " to display information on Champions, Items, Maps, and Monsters.",
            "username": "LoL-botsy"
        }
    })
})

module.exports = router;
