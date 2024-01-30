const guideDAO = require('../models/guides.js');

exports.demo = (req, res) => {
    // render the mind(fulness) guide view
    guideDAO.getGuidesByType("mind", (err, guides) => {
        console.log(guides)
        if (err) {
            res.status(500).render("500");
        } else {
            res.render("guides/mindfulness", {
                "title": "Mindfulness guide",
                "user": res.locals.username,
                "guides": guides
            });
        }
    });
}

exports.populateDB = (req, res) => {
    // for dev use only
    guideDAO.create(
        "Proper Push-Up Ultimate Guide: How to Do Push Ups with Correct Form",
        "Steve Kamb",
        "mind",
        [
            "The push-up is one of the best exercises on the planet. It's a foundational movement in strength training, and an exercise EVERYBODY should be doing regularly. However, it's also an exercise that about 95% of people get wrong and do incorrectly. Here's how to get into proper push-up position:",
            "On the ground, set your hands at a distance that is slightly wider than shoulder-width apart.",
            "To alleviate wrist pain (if you have poor wrist flexibility) do your push-ups holding onto push-up handles or a bar",
            "Your feet should be set up in a way that feels right and comfortable and in balance.",
            "Think of your body as one giant straight line from the top of your head down through your heels. Your butt shouldn't be sticking way up in the air or sagging.",
            "If you have a problem getting the proper form with your body, try this: clench your butt, and then tighten your abs as if you're bracing to get punched.",
            "Your head should be looking slightly ahead of you, not straight down.",
            "At the top of your push-up, your arms should be straight and supporting your weight.",
            "Nearly EVERYBODY does push-ups with their arms out far too wide and their shoulders flared. If I was looking down at you from above, your arms and body should form an ARROW, not a T."
        ]
    );
    guideDAO.create(
        "Advanced Bodyweight Workout Circuit: A Full Body Routine You Can Do At Home",
        "Steve Kamb",
        "mind",
        [
            "Want to get strong but hate the gym? No problem! With today's bodyweight routines you can burn fat, build muscle, and get a great workout in! All with no gym membership required!",
            "This is the beginner bodyweight workout (do 3 circuits):",
            "20 Bodyweight squats",
            "10 Push-ups",
            "10 Walking lunges (each leg)",
            "10 Dumbbell rows (use a milk jug or other weight)",
            "15 Second Plank",
            "30 Jumping jacks",
            "Here is a sample routine for somebody who has conquered the beginner bodyweight workout but can't yet do the advanced routine below:",
            "10 Bodyweight Squats",
            "10 Walking Lunges",
            "15 Jump Ups",
            "3 Assisted Pull-Ups (or 6 inverted bodyweight rows – overhand grip on table)",
            "8 Dips (or 10 decline push-ups if these are too tough)",
            "3 Assisted Chin-Ups (or 6 inverted bodyweight rows – underhand grip on table)",
            "10 Push-Ups",
            "30 Second Plank",
            "30 Jumping Jacks",
            "This is the advanced bodyweight workout (Do 3 Circuits):",
            "10 One-Legged Squats – each side",
            "20 Bodyweight Squats",
            "20 Walking Lunges (10 each leg)",
            "20 Jump Step-Ups (10 each leg)",
            "10 Pull-Ups (or inverted bodyweight rows using your kitchen table)",
            "10 Dips – Bar Stools",
            "10 Chin-Ups (or inverted bodyweight rows with an underhand grip)",
            "10 Push-Ups",
            "30 Second Plank"
        ]
    );
    guideDAO.create(
        "Fitness industry hyperbole is exhausting",
        "Tony Gentilcore",
        "mind",
        [
            "We all know hyperbole when we see it.",
            "In general, it's purposeful use of exaggeration as a rhetorical device or figure of speech. It's often used in writing (and communication as a whole) to evoke strong feelings and reaction from the audience. These reactions can range from a chuckle and an %22aww shucks%22 eye roll to someone getting punched in the throat.",
            "Some innocuous and inane examples of hyperbole – the %22aww shucks%22 variety – would be:",
            "I'm so hungry I could eat a horse.",
            "%22So and so%22 is about as intelligent as a ham sandwich.",
            "Attack of the Clones is a cinematic masterpiece.",
            "A few weeks ago I was perusing Twitter when my feed fed me this piece of gargantuan eye wash (because, of course)%3A",
            "%22STOP DOING BARBELL SQUATS!!! It's a useless exercise that does way more harm than good to your body.%22",
            "This, my dear reader, is a choice example of the latter example of hyperbole mentioned above. You know, the kind that makes you want to wash your eyes with broken glass."
        ]
    );
}
