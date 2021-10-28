/* Task:
our mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp; */

//code:

function htmlspecialchars(formData) {
    let arr = [];
      for (let i = 0; i < formData.length; i++){
        if (formData[i] == '<'){
          arr.push('&lt;');
          
        } else if(formData[i] == '>'){
          arr.push('&gt;');
          
        } else if(formData[i] == '"'){
          arr.push('&quot;');
          
        } else if(formData[i] == '&'){
          arr.push('&amp;');
          
        } else {
          arr.push(formData[i]);
        }
      }
    return arr.join('');
    }