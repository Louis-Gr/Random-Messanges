// Parts of the Messanges

const subjects = ["Life","The World","Your Partner","The Sky"]
const you = "You"
const verbsThirdPerson = ["is","will be","was", "can be", "should be", "would be"]
const verbsSecondPerson = ["are", "will be", "were", "can be", "should be", "would be"]
const negation = "not"
const comparison = "like"
const adjectives = ["beautiful","furry","short","small","big", "worth it","fat","versetile","organic","bubbly","savage"]
const comparisonWords = ["Water","the Elements","Jürgen Drews","Music","Jabba the Hut", "a glas of wine","a River","my Girlfriend", "skateboards", "a table","the sun"]


function createScentences(num){
    for (let i = 0; i < num; i++){
        // Random Calls
        const randomSubject = subjects[Math.floor(Math.random()*subjects.length)]
        const randomVerbsThirdPerson =verbsThirdPerson[Math.floor(Math.random()*verbsThirdPerson.length)]
        const randomVerbsSecondPerson = verbsSecondPerson[Math.floor(Math.random()*verbsSecondPerson.length)]
        const randomAdjectiv = adjectives[Math.floor(Math.random()*adjectives.length)]
        const randomComparisonWord = comparisonWords[Math.floor(Math.random()*comparisonWords.length)]

        //Possibilitys
        const posibility = Math.floor(Math.random()* 4)

        //Posibility 1 = Comparison with "You"
        if (posibility === 0){
            const possibleNot = Math.floor(Math.random())
            if (possibleNot === 0)
            console.log(you + " " + randomVerbsSecondPerson + " " +  comparison + " " + randomComparisonWord + ".")
            else
            console.log(you + " " + randomVerbsSecondPerson + " " + negation + " " +  comparison + " " + randomComparisonWord + ".")
        }

        // Posibility 2 = Comparison with "Subject"
        else if (posibility === 1){
            const possibleNot = Math.floor(Math.random()*2)
            if (possibleNot === 0)
            console.log(randomSubject + " " + randomVerbsThirdPerson + " " +  comparison + " " + randomComparisonWord + ".")
            else
            console.log(randomSubject + " " + randomVerbsThirdPerson + " " + negation + " " +  comparison + " " + randomComparisonWord + ".")
        }
        // Posibility 3 = Statement with "You"
        else if (posibility === 2){
            const possibleNot = Math.floor(Math.random())
            if (possibleNot === 0)
            console.log(you + " " + randomVerbsSecondPerson + " " + randomAdjectiv + ".")
            else
            console.log(you + " " + randomVerbsSecondPerson + " " + negation + " " + randomAdjectiv + ".")
        }
        // Posibility 4 = Statement with "Subject"
        else if (posibility === 4){
            const possibleNot = Math.floor(Math.random())
            if (possibleNot === 0)
            console.log(randomSubject + " " + randomVerbsThirdPerson + " " + randomAdjectiv + ".")
            else
            console.log(randomSubject + " " + randomVerbsThirdPerson + " " + negation + " " + randomAdjectiv + ".")
        }
    }
}

   createScentences(10)