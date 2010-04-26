README
======
This plugin allows you to use default values on form inputs
via the `title` attribute. On focus, the default value
is cleared **only** if the user hasn't entered data. On
blur, default values are restored if the user hasn't entered
data.

If both `title` and `value` attributes are present,
`value` is used, and nothing is changed on focus/blur.

Optionally, a `default_class` is toggled (ex: use it to make 'labels'
show in a different color)

HTML
----
    <input type="text" name="username" title="Username" class="autoclear" />

Javascript
----------
    $(document).ready(function() {
      $('input.autoclear').autoclear({ default_class: 'faded' });
    });

Credit
------
Most of this was stolen from Matt Lunn's [autoclear](http://www.mattlunn.me.uk/projects/autoclear) plugin. I
cleaned it up to use [$.live()](http://api.jquery.com/live/) so it would workd
with elements loaded to the DOM via AJAX.
