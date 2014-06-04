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
        $("#favbtn").click(function(evt)
        {
         activate_subpage("#favorite_page"); 
        });
        $("#messagebtn").click(function(evt)
        {
         activate_subpage("#messages_page"); 
        });
        $("#profilebtn").click(function(evt)
        {
         activate_subpage("#profile_page"); 
        });
        $(document).on("click", "#Lovebtn", function(evt)
        {
         activate_subpage("#WhatWeLove"); 
        });
        $(document).on("click", "#FindUsbtn", function(evt)
        {
         activate_subpage("#FindUs"); 
        });
        $(document).on("click", ".uib_w_8", function(evt)
        {
         activate_subpage("#More"); 
        });
        $(document).on("click", ".uib_w_10", function(evt)
        {
         activate_subpage("#About"); 
        });
        $(document).on("click", ".uib_w_11", function(evt)
        {
         activate_subpage("#FindUs"); 
        });
        $(document).on("click", ".uib_w_13", function(evt)
        {
        /* your code goes here */ 
        });
}
 $(document).ready(register_event_handlers);
})();
