<script type="text/javascript">
$(document).ready(function(){
    $('div.content p img').each(function(){ /* here selector could be modified to be more specific */
        var aText=$(this).attr("alt");
        if(aText.length>=1){ /* only do this for <img> which have alt="" tags */
            $(this).wrap("<span class=\"media\"><\/span>")
                    .after("<em>" + aText + "<\/em>");
        }
    });
});
</script>
