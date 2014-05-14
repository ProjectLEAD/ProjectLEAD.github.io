(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $("#homebtn").click(function(evt)
        {
         activate_subpage("#mainsub"); 
        });
        
        
        $("#profilebtn").click(function(evt)
        {
         activate_subpage("#profile_page"); 
        });
        $(document).on("click", "#messagebtn", function(evt)
        {
         activate_subpage("#profile_page"); 
        });
        
        $(document).on("click", ".uib_w_15", function(evt)
        {
         activate_subpage("#About"); 
        });
        $(document).on("click", ".uib_w_16", function(evt)
        {
         activate_subpage("#mainsub"); 
        });
        $(document).on("click", "#favbtn", function(evt)
        {
         activate_subpage("#What_We_Love"); 
        });
}
 $(document).ready(register_event_handlers);
})();
