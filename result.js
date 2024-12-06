window.onload = function() {
 const results = JSON.parse(localStorage.getItem("quizResults"));
 if (results) {
         let totalScore = results.reduce((acc, curr) => acc + curr, 0);
        document.getElementById("total-score").textContent = totalScore;

       
        let feedbackMessage = "";

        if (totalScore <= 0) {
           {feedbackMessage="Please consider retaking the test. No Record Found.";}
        }else if(totalScore<=25)
            {
          feedbackMessage = "Your mental health seems to be in a healthy state. Keep up the good work! Consider maintaining good habits to stay balanced.";}
           else if (totalScore <= 40) {
            feedbackMessage = "It appears you may be experiencing some stress. It's a good idea to explore stress-relief strategies or seek professional help.";
        } else if (totalScore <= 60) {
            feedbackMessage = "It seems you're experiencing higher levels of stress or anxiety. Please consider reaching out to a mental health professional.";
        } else {
            feedbackMessage = "Your results suggest significant distress. It's important to talk to a mental health professional immediately for guidance and support.";
        }

        document.getElementById("feedback").textContent = feedbackMessage;

    } 

}
