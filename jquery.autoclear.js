/**
 * Intelligently autoclear form inputs
 *
 * See README for usage
 *
 * Based on Matt Lunn's http://www.mattlunn.me.uk/projects/autoclear
 *
 * @author   Joshua Priddle <jpriddle@nevercraft.net>
 * @version  0.1
 * @param    Object
 * @see      http://blog.nevercraft.net/projects/jquery-autoclear-live
 * @see      README
 */
(function($) {
  $.fn.autoclear = function(custom_settings) {
    var settings = {
      default_class: 'default',
      default_val:   ''
    };

    $.extend(settings, custom_settings);

    function empty(el) {
      if (el.attr('value') == el.attr('title')) {
        el.removeClass(settings.default_class).attr('value', '');
      }
    }

    function fill(el) {
      var default_val = el.attr('title'),
          current_val = el.attr('value');

      if (current_val === "" || current_val === default_val) {
        el.addClass(settings.default_class).attr('value', default_val);
      }
    }

    function is_set(val) {
      return val !== undefined && $.trim(val) !== "";
    }

    this.live('focus.autoclear', function () {
      empty($(this));
    }).live('blur.autoclear init.autoclear', function () {
      fill($(this));
    });

    this.each(function () {
      var self        = $(this),
          current_val = self.attr('value'),
          default_val = self.attr('title');

      if ( ! is_set(current_val) && is_set(default_val)) {
        self.trigger('init.autoclear');
      } else if ( ! is_set(default_val)) {
        self.attr('title', settings.default_val);
        self.trigger('init.autoclear');
      }
    });
  };
})(jQuery);
