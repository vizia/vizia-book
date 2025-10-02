// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="foreword.html">Foreword</a></li><li class="chapter-item affix "><a href="getting_started.html">Getting Started</a></li><li class="chapter-item affix "><li class="part-title">Quickstart</li><li class="chapter-item "><a href="quickstart/overview.html"><strong aria-hidden="true">1.</strong> Overview</a></li><li class="chapter-item "><a href="quickstart/setup.html"><strong aria-hidden="true">2.</strong> Creating a new project</a></li><li class="chapter-item "><a href="quickstart/application.html"><strong aria-hidden="true">3.</strong> Creating an application</a></li><li class="chapter-item "><a href="quickstart/window_modifiers.html"><strong aria-hidden="true">4.</strong> Modifying the window</a></li><li class="chapter-item "><a href="quickstart/view.html"><strong aria-hidden="true">5.</strong> Adding views</a></li><li class="chapter-item "><a href="quickstart/modifiers.html"><strong aria-hidden="true">6.</strong> Modifying views</a></li><li class="chapter-item "><a href="quickstart/composing_views.html"><strong aria-hidden="true">7.</strong> Composing views</a></li><li class="chapter-item "><a href="quickstart/layout.html"><strong aria-hidden="true">8.</strong> Customizing the layout</a></li><li class="chapter-item "><a href="quickstart/styling.html"><strong aria-hidden="true">9.</strong> Styling the application</a></li><li class="chapter-item "><a href="quickstart/transitions.html"><strong aria-hidden="true">10.</strong> Animating styles with transitions</a></li><li class="chapter-item "><a href="quickstart/model_data.html"><strong aria-hidden="true">11.</strong> Managing state with model data</a></li><li class="chapter-item "><a href="quickstart/binding.html"><strong aria-hidden="true">12.</strong> Lenses and data binding</a></li><li class="chapter-item "><a href="quickstart/events.html"><strong aria-hidden="true">13.</strong> Mutating state with events</a></li><li class="chapter-item "><a href="quickstart/components.html"><strong aria-hidden="true">14.</strong> Making the counter reusable</a></li><li class="chapter-item "><a href="quickstart/localization.html"><strong aria-hidden="true">15.</strong> Localizing the application</a></li><li class="chapter-item "><a href="quickstart/accessibility.html"><strong aria-hidden="true">16.</strong> Making the application accessible</a></li><li class="chapter-item "><a href="quickstart/final_code.html"><strong aria-hidden="true">17.</strong> The final code</a></li><li class="chapter-item affix "><li class="part-title">Application and Windows</li><li class="chapter-item "><a href="application/application.html"><strong aria-hidden="true">18.</strong> Application</a></li><li class="chapter-item "><a href="application/multiple_windows.html"><strong aria-hidden="true">19.</strong> Multiple windows</a></li><li class="chapter-item "><a href="application/window_modifiers.html"><strong aria-hidden="true">20.</strong> Window modifiers</a></li><li class="chapter-item affix "><li class="part-title">Views and Modifiers</li><li class="chapter-item "><a href="views/views.html"><strong aria-hidden="true">21.</strong> Views</a></li><li class="chapter-item "><a href="views/modifiers.html"><strong aria-hidden="true">22.</strong> Modifiers</a></li><li class="chapter-item "><a href="views/custom_modifiers.html"><strong aria-hidden="true">23.</strong> Custom modifiers</a></li><li class="chapter-item affix "><li class="part-title">Models</li><li class="chapter-item "><a href="models/models.html"><strong aria-hidden="true">24.</strong> Models</a></li><li class="chapter-item "><a href="models/environment.html"><strong aria-hidden="true">25.</strong> Environment</a></li><li class="chapter-item affix "><li class="part-title">Lenses and Binding</li><li class="chapter-item "><a href="binding/binding.html"><strong aria-hidden="true">26.</strong> Binding</a></li><li class="chapter-item "><a href="binding/data.html"><strong aria-hidden="true">27.</strong> The Data trait</a></li><li class="chapter-item "><a href="binding/lens_map.html"><strong aria-hidden="true">28.</strong> Mapping lenses</a></li><li class="chapter-item "><a href="binding/conditional_views.html"><strong aria-hidden="true">29.</strong> Conditional views</a></li><li class="chapter-item "><a href="binding/nested_data.html"><strong aria-hidden="true">30.</strong> Binding nested data</a></li><li class="chapter-item affix "><li class="part-title">Events</li><li class="chapter-item "><a href="events/events.html"><strong aria-hidden="true">31.</strong> Events</a></li><li class="chapter-item affix "><li class="part-title">Styling</li><li class="chapter-item "><a href="styling/styling.html"><strong aria-hidden="true">32.</strong> Stylesheets</a></li><li class="chapter-item "><a href="styling/selectors.html"><strong aria-hidden="true">33.</strong> Selectors</a></li><li class="chapter-item "><a href="styling/style_properties.html"><strong aria-hidden="true">34.</strong> Properties</a></li><li class="chapter-item "><a href="styling/transitions.html"><strong aria-hidden="true">35.</strong> Transitions</a></li><li class="chapter-item "><a href="styling/layer.html"><strong aria-hidden="true">36.</strong> Layer</a></li><li class="chapter-item "><a href="styling/background.html"><strong aria-hidden="true">37.</strong> Background</a></li><li class="chapter-item "><a href="styling/border.html"><strong aria-hidden="true">38.</strong> Border</a></li><li class="chapter-item "><a href="styling/corner.html"><strong aria-hidden="true">39.</strong> Corners</a></li><li class="chapter-item "><a href="styling/effects.html"><strong aria-hidden="true">40.</strong> Effects</a></li><li class="chapter-item "><a href="styling/outline.html"><strong aria-hidden="true">41.</strong> Outline</a></li><li class="chapter-item "><a href="styling/text.html"><strong aria-hidden="true">42.</strong> Text</a></li><li class="chapter-item "><a href="styling/transform.html"><strong aria-hidden="true">43.</strong> Transform</a></li><li class="chapter-item "><a href="styling/other.html"><strong aria-hidden="true">44.</strong> Other</a></li><li class="chapter-item affix "><li class="part-title">Layout</li><li class="chapter-item "><a href="layout/layout.html"><strong aria-hidden="true">45.</strong> Layout</a></li><li class="chapter-item "><a href="layout/size.html"><strong aria-hidden="true">46.</strong> Size</a></li><li class="chapter-item "><a href="layout/layout_type.html"><strong aria-hidden="true">47.</strong> Layout Type</a></li><li class="chapter-item "><a href="layout/alignment.html"><strong aria-hidden="true">48.</strong> Alignment</a></li><li class="chapter-item "><a href="layout/padding.html"><strong aria-hidden="true">49.</strong> Padding</a></li><li class="chapter-item "><a href="layout/gap.html"><strong aria-hidden="true">50.</strong> Gap</a></li><li class="chapter-item "><a href="layout/position_type.html"><strong aria-hidden="true">51.</strong> Position Type</a></li><li class="chapter-item "><a href="layout/spacing.html"><strong aria-hidden="true">52.</strong> Spacing</a></li><li class="chapter-item "><a href="layout/constraints.html"><strong aria-hidden="true">53.</strong> Constraints</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
