jQuery('[data-animate]').each(function(){
    var self = jQuery(this);
    if ( self.data('animate') ) {
        self.addClass('animate-auto');
    } else {
        self.addClass('animate');
    }
});

jQuery('[data-stagger]').addClass('stagger');

var itemQueue = [];
var delay = 100;
var queueTimer;
var queueLimit = 8;

function processItemQueue ( limit ) {
    if (queueTimer) return // We're already processing the queue

    queueTimer = window.setInterval(function () {
        if (itemQueue.length) {
            jQuery(itemQueue.shift()).addClass('fadeIn').removeClass('stagger');
            processItemQueue()
        } else {
            window.clearInterval(queueTimer)
            queueTimer = null
        }
    }, delay)
}

// On document ready
jQuery(document).ready(function ($) {

    $('.stagger').waypoint({
        offset: '90%',
        handler: function(direction) {
            itemQueue.push(this.element);
            processItemQueue();
            // $(this.element).addClass('fadeInUp animated').removeClass('animate-auto');
            // waypointClasses(direction, 'bottom', 'bottom', this.element);
        }
    });

    $('.animate, .animate-auto').waypoint({
        offset: '90%',
        handler: function(direction) {
            waypointClasses(direction, 'bottom', this.element);
        }
    });

    // Handle waypoint class modification
    function waypointClasses(direction, elementPosition, element) {
        // Remove all the waypoint prefixed classes
        $(element).removeClass (function (index, css) {
        	return (css.match (/(^|\s)waypoint-\S+/g) || []).join(' ');
        });
        // Re-add the enabled class
        // $(element).addClass('waypoint-enabled');

        $(element).addClass('animated');

        if ( $(element).data('animate') ) {
            $(element).addClass( $(element).data('animate') ).removeClass('animate-auto');
        }

        // As long as we are in view of the element
        // if( (direction != 'up' || elementPosition != 'top')
        	// && ( direction != 'down' || elementPosition != 'bottom' ) ) {
        	// $(element).addClass('waypoint-visible');
        	// // Add directional and positional classes
        	// $(element).addClass('waypoint-'+direction);
        	// $(element).addClass('waypoint-window-'+windowPosition);
        	// $(element).addClass('waypoint-element-'+elementPosition);
        // }
    };

});
