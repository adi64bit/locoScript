(function(root, factory) {
  root.immLocomotif = new factory(jQuery);
})(this, function($) {
  var Self = this;


  Self.locoStatus = false;
  Self.locoScroll = [];
  Self.locoElm = '';
  Self.loco = '';
  Self.onScroll = function(clbk) {
    Self.locoScroll.push(clbk);
  };

  Self.init = function(elm) {
    Self.locoElm = document.querySelector(elm);
    if (typeof LocomotiveScroll == 'undefined' || !Self.locoElm) {
      Self.locoStatus = false;
      console.log('please check your element || Loco Library');
      return;
    }
    setTimeout(function() {
      window.scrollTo(0, 0);
      if ($(window).width() < 992 && Self.locoStatus == false) {
        Self.loco = '';
        Self.locoStatus = false;
      } else {
        if (location.hash) {
          Self.smoothScrolling();
          setTimeout(function() {
            Self.loco.scrollTo(location.hash);
            $(window).trigger('resize');
          }, 500);
        } else {
          Self.smoothScrolling();
        }
      }
      Self.eventManager();
    }, 1);
    return;
  };

  Self.eventManager = function() {
    $(window).on('load', function() {
      Self.lococheckMobile();
    }).on('resize', function() {
      Self.lococheckMobile();
    }).on('popstate', function() {
      Self.lococheckMobile();
    }).on('scroll', function() {
      if (!Self.locoStatus) {
        Self.arrayManager(Self.locoScroll);
        return;
      }
    });
    if (typeof lazySizes !== 'undefined') {
      document.addEventListener('lazyloaded', function(e) {
        if (Self.locoStatus) {
          Self.loco.update();
        }
      });
    }
  };

  Self.arrayManager = function(array) {
    if (array.length > 0) {
      var args = arguments;
      $.each(array, function(index, value) {
        value([].slice.call(args, 1));
      });
    }
  };

  Self.lococheckMobile = function() {
    if ($(window).width() > 991 && Self.locoStatus == false) {
      Self.locomotiveInit();
    } else if ($(window).width() < 992 && Self.locoStatus == true) {
      Self.loco.destroy();
      Self.locoStatus = false;
      Self.loco = '';
    } else if ($(window).width() > 991 && Self.locoStatus == true) {
      Self.loco.update();
    }
    return;
  };

  Self.smoothScrolling = function() {
    Self.locoStatus = true;
    Self.loco = new LocomotiveScroll({
      el: Self.locoElm,
      smooth: true
    });
    Self.loco.on('scroll', function(e) {
      if (Self.locoStatus) {
        Self.arrayManager(Self.locoScroll, e);
        return;
      }
    });
  };
});
