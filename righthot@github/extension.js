
const St = imports.gi.St;
const Main = imports.ui.main;

let button;

function _showOverview() {
    Main.overview.toggle();
}

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let icon = new St.Icon({ icon_name: 'system-run',
                             icon_type: St.IconType.SYMBOLIC,
                             style_class: 'system-status-icon' });

    button.set_child(icon);
    button.connect('button-press-event', _showOverview);
    button.connect('enter-event', _showOverview);
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, Main.panel._rightBox.get_children().length);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}