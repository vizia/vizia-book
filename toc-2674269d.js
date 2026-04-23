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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="introduction.html">Introduction</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="getting_started.html">Getting Started</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/quickstart.html"><strong aria-hidden="true">1.</strong> Quickstart</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/overview.html"><strong aria-hidden="true">1.1.</strong> Overview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/setup.html"><strong aria-hidden="true">1.2.</strong> Creating a New Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/application.html"><strong aria-hidden="true">1.3.</strong> Creating an Application</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/window_modifiers.html"><strong aria-hidden="true">1.4.</strong> Modifying the Window</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/view.html"><strong aria-hidden="true">1.5.</strong> Adding Views</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/modifiers.html"><strong aria-hidden="true">1.6.</strong> Modifying Views</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/composing_views.html"><strong aria-hidden="true">1.7.</strong> Composing Views</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/layout.html"><strong aria-hidden="true">1.8.</strong> Customizing the Layout</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/styling.html"><strong aria-hidden="true">1.9.</strong> Styling the Application</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/transitions.html"><strong aria-hidden="true">1.10.</strong> Animating Styles with Transitions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/model_data.html"><strong aria-hidden="true">1.11.</strong> Managing State with Model Data</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/binding.html"><strong aria-hidden="true">1.12.</strong> Data Binding</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/events.html"><strong aria-hidden="true">1.13.</strong> Mutating State with Events</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/components.html"><strong aria-hidden="true">1.14.</strong> Making the Counter Reusable</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/localization.html"><strong aria-hidden="true">1.15.</strong> Localizing the Application</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/accessibility.html"><strong aria-hidden="true">1.16.</strong> Making the Application Accessible</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quickstart/final_code.html"><strong aria-hidden="true">1.17.</strong> The Final Code</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="application/application_and_windows.html"><strong aria-hidden="true">2.</strong> Application and Windows</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="application/application.html"><strong aria-hidden="true">2.1.</strong> Application</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="application/multiple_windows.html"><strong aria-hidden="true">2.2.</strong> Multiple Windows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="application/window_modifiers.html"><strong aria-hidden="true">2.3.</strong> Window Modifiers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="application/positioning_windows.html"><strong aria-hidden="true">2.4.</strong> Positioning Windows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="application/popup_windows.html"><strong aria-hidden="true">2.5.</strong> Popup and Dialog Windows</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="resources/managing_resources.html"><strong aria-hidden="true">3.</strong> Managing Resources</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="resources/fonts.html"><strong aria-hidden="true">3.1.</strong> Fonts</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="resources/icons.html"><strong aria-hidden="true">3.2.</strong> Icons</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="resources/images.html"><strong aria-hidden="true">3.3.</strong> Images</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="resources/translations.html"><strong aria-hidden="true">3.4.</strong> Translations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="resources/stylesheets.html"><strong aria-hidden="true">3.5.</strong> Stylesheets</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/views_and_modifiers.html"><strong aria-hidden="true">4.</strong> Views and Modifiers</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/views.html"><strong aria-hidden="true">4.1.</strong> Views</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/modifiers.html"><strong aria-hidden="true">4.2.</strong> Modifiers</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="models/models_overview.html"><strong aria-hidden="true">5.</strong> Models</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="models/models.html"><strong aria-hidden="true">5.1.</strong> Models</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="models/environment.html"><strong aria-hidden="true">5.2.</strong> Environment</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binding/signals_and_binding.html"><strong aria-hidden="true">6.</strong> Signals and Binding</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binding/binding.html"><strong aria-hidden="true">6.1.</strong> Data Binding</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binding/signals.html"><strong aria-hidden="true">6.2.</strong> Signals</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binding/reading_signals.html"><strong aria-hidden="true">6.3.</strong> Reading Signals</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binding/writing_signals.html"><strong aria-hidden="true">6.4.</strong> Writing Signals</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binding/conditional_views.html"><strong aria-hidden="true">6.5.</strong> Conditional Views</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binding/derived.html"><strong aria-hidden="true">6.6.</strong> Derived Signals with Memo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binding/map.html"><strong aria-hidden="true">6.7.</strong> Derived Signals with map()</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binding/sync_signals.html"><strong aria-hidden="true">6.8.</strong> Sync Signals</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="events/events_overview.html"><strong aria-hidden="true">7.</strong> Events</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="events/events.html"><strong aria-hidden="true">7.1.</strong> Events</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="events/propagation.html"><strong aria-hidden="true">7.2.</strong> Propagation and Targeting</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="events/timed_events.html"><strong aria-hidden="true">7.3.</strong> Timed Events</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="events/timers.html"><strong aria-hidden="true">7.4.</strong> Timers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="events/async_tasks.html"><strong aria-hidden="true">7.5.</strong> Async Tasks with Tokio</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/styling_overview.html"><strong aria-hidden="true">8.</strong> Styling</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/styling.html"><strong aria-hidden="true">8.1.</strong> Stylesheets</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/selectors.html"><strong aria-hidden="true">8.2.</strong> Selectors</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/style_properties.html"><strong aria-hidden="true">8.3.</strong> Properties</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/variables.html"><strong aria-hidden="true">8.4.</strong> Variables</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/theming.html"><strong aria-hidden="true">8.5.</strong> Theming</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/background.html"><strong aria-hidden="true">8.6.</strong> Background</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/border.html"><strong aria-hidden="true">8.7.</strong> Border</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/corner.html"><strong aria-hidden="true">8.8.</strong> Corners</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/effects.html"><strong aria-hidden="true">8.9.</strong> Effects</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/layer.html"><strong aria-hidden="true">8.10.</strong> Layer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/outline.html"><strong aria-hidden="true">8.11.</strong> Outline</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/text.html"><strong aria-hidden="true">8.12.</strong> Text</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/transform.html"><strong aria-hidden="true">8.13.</strong> Transform</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="styling/other.html"><strong aria-hidden="true">8.14.</strong> Other</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/layout_overview.html"><strong aria-hidden="true">9.</strong> Layout</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/layout.html"><strong aria-hidden="true">9.1.</strong> Layout</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/size.html"><strong aria-hidden="true">9.2.</strong> Size</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/layout_type.html"><strong aria-hidden="true">9.3.</strong> Layout Type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/alignment.html"><strong aria-hidden="true">9.4.</strong> Alignment</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/padding.html"><strong aria-hidden="true">9.5.</strong> Padding</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/gap.html"><strong aria-hidden="true">9.6.</strong> Gap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/position_type.html"><strong aria-hidden="true">9.7.</strong> Position Type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/spacing.html"><strong aria-hidden="true">9.8.</strong> Spacing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/constraints.html"><strong aria-hidden="true">9.9.</strong> Constraints</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/wrap.html"><strong aria-hidden="true">9.10.</strong> Wrap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="layout/grid.html"><strong aria-hidden="true">9.11.</strong> Grid</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="animation/animations_overview.html"><strong aria-hidden="true">10.</strong> Animations</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="animation/transitions.html"><strong aria-hidden="true">10.1.</strong> Transitions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="animation/animations.html"><strong aria-hidden="true">10.2.</strong> Animations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="animation/css_animations.html"><strong aria-hidden="true">10.3.</strong> CSS Animations</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="localization/localization_overview.html"><strong aria-hidden="true">11.</strong> Localization</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="localization/localization.html"><strong aria-hidden="true">11.1.</strong> Localization</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="localization/locale.html"><strong aria-hidden="true">11.2.</strong> Setting the Locale</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="localization/direction.html"><strong aria-hidden="true">11.3.</strong> Direction</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="localization/translation.html"><strong aria-hidden="true">11.4.</strong> Translating Text</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="localization/localizing_views.html"><strong aria-hidden="true">11.5.</strong> Localizing Views</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="accessibility/accessibility_overview.html"><strong aria-hidden="true">12.</strong> Accessibility</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="accessibility/accessibility.html"><strong aria-hidden="true">12.1.</strong> Accessibility</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="accessibility/screen_readers.html"><strong aria-hidden="true">12.2.</strong> Screen readers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="accessibility/keyboard_navigation.html"><strong aria-hidden="true">12.3.</strong> Keyboard navigation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="accessibility/focus.html"><strong aria-hidden="true">12.4.</strong> Focus management</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="accessibility/shortcuts.html"><strong aria-hidden="true">12.5.</strong> Keyboard Shortcuts</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="accessibility/testing.html"><strong aria-hidden="true">12.6.</strong> Testing accessibility</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in_views_overview.html"><strong aria-hidden="true">13.</strong> Built-in Views</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/accordion.html"><strong aria-hidden="true">13.1.</strong> Accordion</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/avatar.html"><strong aria-hidden="true">13.2.</strong> Avatar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/badge.html"><strong aria-hidden="true">13.3.</strong> Badge</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/button.html"><strong aria-hidden="true">13.4.</strong> Button</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/calendar.html"><strong aria-hidden="true">13.5.</strong> Calendar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/card.html"><strong aria-hidden="true">13.6.</strong> Card</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/checkbox.html"><strong aria-hidden="true">13.7.</strong> Checkbox</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/chip.html"><strong aria-hidden="true">13.8.</strong> Chip</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/collapsible.html"><strong aria-hidden="true">13.9.</strong> Collapsible</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/combobox.html"><strong aria-hidden="true">13.10.</strong> ComboBox</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/divider.html"><strong aria-hidden="true">13.11.</strong> Divider</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/dropdown.html"><strong aria-hidden="true">13.12.</strong> Dropdown</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/element.html"><strong aria-hidden="true">13.13.</strong> Element</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/grid.html"><strong aria-hidden="true">13.14.</strong> Grid</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/image.html"><strong aria-hidden="true">13.15.</strong> Image</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/knob.html"><strong aria-hidden="true">13.16.</strong> Knob</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/label.html"><strong aria-hidden="true">13.17.</strong> Label</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/list.html"><strong aria-hidden="true">13.18.</strong> List</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/markdown.html"><strong aria-hidden="true">13.19.</strong> Markdown</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/menu.html"><strong aria-hidden="true">13.20.</strong> Menu</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/popup.html"><strong aria-hidden="true">13.21.</strong> Popup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/progressbar.html"><strong aria-hidden="true">13.22.</strong> ProgressBar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/radio.html"><strong aria-hidden="true">13.23.</strong> RadioButton</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/rating.html"><strong aria-hidden="true">13.24.</strong> Rating</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/resizable.html"><strong aria-hidden="true">13.25.</strong> Resizable</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/scrollbar.html"><strong aria-hidden="true">13.26.</strong> Scrollbar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/scrollview.html"><strong aria-hidden="true">13.27.</strong> ScrollView</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/select.html"><strong aria-hidden="true">13.28.</strong> Select</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/sidebar.html"><strong aria-hidden="true">13.29.</strong> Sidebar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/slider.html"><strong aria-hidden="true">13.30.</strong> Slider</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/spinbox.html"><strong aria-hidden="true">13.31.</strong> Spinbox</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/stack.html"><strong aria-hidden="true">13.32.</strong> HStack, VStack, ZStack</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/switch.html"><strong aria-hidden="true">13.33.</strong> Switch</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/tabview.html"><strong aria-hidden="true">13.34.</strong> TabView</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/table.html"><strong aria-hidden="true">13.35.</strong> Table</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/textbox.html"><strong aria-hidden="true">13.36.</strong> Textbox</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/toggle_button.html"><strong aria-hidden="true">13.37.</strong> ToggleButton</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/tooltip.html"><strong aria-hidden="true">13.38.</strong> Tooltip</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/virtual_list.html"><strong aria-hidden="true">13.39.</strong> VirtualList</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/virtual_table.html"><strong aria-hidden="true">13.40.</strong> VirtualTable</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="views/built_in/xypad.html"><strong aria-hidden="true">13.41.</strong> XYPad</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="custom_views/custom_views_overview.html"><strong aria-hidden="true">14.</strong> Custom Views</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="custom_views/custom_views.html"><strong aria-hidden="true">14.1.</strong> Custom Views</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="custom_views/custom_view_composition.html"><strong aria-hidden="true">14.2.</strong> Composition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="custom_views/view_model_data.html"><strong aria-hidden="true">14.3.</strong> View-Local State</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="custom_views/view_event_handling.html"><strong aria-hidden="true">14.4.</strong> Handling Events in Custom Views</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="custom_views/custom_view_binding.html"><strong aria-hidden="true">14.5.</strong> Binding in Custom Views</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="custom_views/custom_view_modifiers.html"><strong aria-hidden="true">14.6.</strong> Custom View Modifiers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="custom_views/custom_drawing.html"><strong aria-hidden="true">14.7.</strong> Custom Drawing</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bundling/bundling_overview.html"><strong aria-hidden="true">15.</strong> Bundling</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bundling/binary_size.html"><strong aria-hidden="true">15.1.</strong> Decreasing Binary Size</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bundling/cargo_bundle.html"><strong aria-hidden="true">15.2.</strong> Bundling with cargo-bundle</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bundling/windows_shell.html"><strong aria-hidden="true">15.3.</strong> Removing the Shell on Windows</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

