jQuery(document).ready(function() {

  resizeSidebar();
  resizeContent();
  resizeAside();
  resizeFieldsetContent();

  displayMenu();
  displayFilters();
  displayTooltip();
  
  displaySubforms();
  
  jQuery(window).resize(function() {
    resizeSidebar();
    resizeContent();
    resizeAside();
    resizeFieldsetContent();
  });
  
  jQuery('.sf_admin_form_field_peanutSeo_title').keyup(function(){
    limitChars('.sf_admin_form_field_peanutSeo_title', 195);
  })
  
  jQuery('.sf_admin_form_field_peanutSeo_description').keyup(function(){
    limitChars('.sf_admin_form_field_peanutSeo_description', 255);
  })
  
  xfn();
  
  showModalCorporate();
   
  

});


function resizeSidebar()
{
  var screenHeight = parseInt(jQuery(window).height()) - parseInt('71') ;
  jQuery('section#sidebar').css('height', screenHeight);
}

function resizeAside()
{
  var screenHeight = parseInt(jQuery(window).height()) - parseInt('61') ;
  jQuery('aside#sf_admin_bar').css('height', screenHeight);
}

function resizeContent()
{
  var screenWidth = parseInt(jQuery(window).width()) - parseInt('181');
  jQuery('body#authenticated section#main').css('width', screenWidth);

  var screenHeight = parseInt(jQuery(window).height()) - parseInt('61') ;
  jQuery('body#authenticated section#main').css('height', screenHeight);
}

function resizeFieldsetContent()
{
  if(jQuery('html').hasClass('ie8')) {
    var mainWidth = parseInt(jQuery('section#main').width()) - parseInt('590');
  }
  else {
    var mainWidth = parseInt(jQuery('section#main').width()) - parseInt('390');
  }
  
  jQuery('#authenticated div.sf_admin_form #sf_fieldset_content').css('width', mainWidth);
}

function displayMenu()
{
  jQuery('nav ul').hide();

  if(jQuery('nav').hasClass('selected'))
  {
    jQuery('nav.selected').children('ul').slideToggle('slow');
  }
  
  jQuery('nav h3').click(function() {

    if(jQuery(this).parent().siblings('nav').hasClass('selected')) {
      jQuery(this).parent().siblings('nav.selected').children('ul').slideToggle();
      jQuery(this).parent().siblings('nav.selected').removeClass('selected');
    }

    if(!jQuery(this).parent().hasClass('selected')) {
      jQuery(this).parent().addClass('selected');
      jQuery(this).siblings('ul').slideToggle();
    }
    else
    {
      jQuery(this).parent().children('ul').slideToggle();
      jQuery(this).parent().removeClass('selected');
    }

  });
}

function displayFilters()
{
  jQuery('aside#sf_admin_bar section.filters').toggle();
  jQuery('aside#sf_admin_bar span.toggle').addClass('closed');

  jQuery('aside#sf_admin_bar span.toggle').click(function() {

    if(jQuery(this).hasClass('open')) {
      jQuery(this).addClass('closed');
      jQuery(this).removeClass('open');
    }
    else
    {
      jQuery(this).addClass('open');
      jQuery(this).removeClass('closed');
    }

    jQuery('aside#sf_admin_bar section.filters').toggle('slow');
  });
}

function displayTooltip()
{
  jQuery('.sf_admin_form form .sf_admin_form_row label').mouseover(function() {
    var content = jQuery(this).siblings('div.help').html();

    if(content != null)
    {
      jQuery(this).tipTip({
        'content': '<p>' + content + '</p>'
      });
    }

  });
}

function displaySubforms()
{
  jQuery('.sf_admin_form_row div.content div.embedForm').hide();
  
  jQuery('.sf_admin_form_row label').click(function() {
    jQuery(this).siblings('div.content').children('div.embedForm').toggle('slow');
  });
}

function limitChars(containerDiv, limit)
{
  var input = jQuery(containerDiv).children('input');
  var text = input.val();
  var length = text.length;
  
  jQuery(containerDiv).children('.count').children('.counter').html((limit - length));
}

function xfn()
{
  if(jQuery('input#peanut_link_peanutXfn_me').is(':checked')) {
    jQuery('.sf_admin_form_field_peanutXfn :input:not(input#peanut_link_peanutXfn_me)').attr('disabled', 'disabled');
  }
    
  jQuery('input#peanut_link_peanutXfn_me').click(function() {
    if(jQuery('input#peanut_link_peanutXfn_me').is(':checked')) {
      jQuery('.sf_admin_form_field_peanutXfn :input:not(input#peanut_link_peanutXfn_me)').attr('disabled', 'disabled');
    } else {
      jQuery('.sf_admin_form_field_peanutXfn :input').removeAttr('disabled');
    }
  });
}

function showModalCorporate()
{
  jQuery('a.ajax').click(function() {
    var url = this.href;
    var dialog = jQuery('div#dialog');
    // load remote content
   dialog.load(
        url,
        {},
        function (responseText, textStatus, XMLHttpRequest) {
              dialog.dialog( { modal: true , title : "New menu"} );                        
        }
    );
    //prevent the browser to follow the link
    return false;
  });
}