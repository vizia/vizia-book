# Audio Plugins with Vizia

As well as regular desktop and web applications, Vizia can also target the development of audio plugin user interfaces.

## What is baseview?
Vizia provides an alternative windowing backend called [baseview](https://github.com/RustAudio/baseview), which allows Vizia to run within a parented window. This is necessary for audio plugin development, as the user interface is drawn into a window which is provided for you by the host. Where the host is, for example, a Digital Audio Workstation (DAW).


## Nih-plug
Although not required for audio plugin development, the recommended way to develop plugins which target the VST3 and CLAP plugin standards with Rust is to use the [`nih-plug`]() crate.

The following sections of this chapter provide a tutorial for developing a basic plugin using `nih-plug` with a Vizia GUI.




