//1. On click return analysis: 
	//A. Total word count of submitted text
	//B. Unique word count of submitted text
	//C. Average word length in characters of the submitted text
	//D. Average sentence length in characters of the submitted text

	$("button").on("click", function(){
		//total word count
        var totalWordCount = document.getElementById("user-text").value.toLowerCase().split(" ").length;
		$(".js-wordCount").text(totalWordCount);
		
        //unique word count
        var wordArray = document.getElementById("user-text").value.toLowerCase().split(" ");
        var count = 0;
        var i,
        	j,
        	duplicate = false;
        
        for (i = 0; i < wordArray.length - 1; i++) {
       			for (j = i + 1; j < wordArray.length; j++) {
       			if (i == j) {
       				duplicate = true;
       			} else count ++
       		} 
       		console.log(count);
        };
        $(".js-countUnique").text(count);

        //Average word length in characters of submitted text
        	function totalWordChar (wrd) {
        		for (var a = 0; a < wordArray.length; a ++) {
        			var wrdArray = wordArray[a].toCharArray();
        			return var wrdArraySum = wrdArray.reduce((a, b) => a + b, 0);
        		}

        	function avgCharCount () {
        		return wrdArraySum / (wordArray.length - 1);
        	}
        
       
        	function myFunction() {
    			document.getElementById(".js-avgWordLength").innerHTML = wordArray.map(avgCharCount);

        // Average sentence length in characters of the submitted text
        
        		



      $(".hidden").show();
		
        event.preventDefault();
	})
		