---
title: BepInEx.Preloader.Core
slug: reference/bepinex.preloader.core
sidebar:
  order: 0
---

## Classes

|                                                                                              |                                                                                                                                                   |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AssemblyBuildInfo](../bepinex.preloader.core.assemblybuildinfo/)                            |                                                                                                                                                   |
| [AssemblyPatcher](../bepinex.preloader.core.patching.assemblypatcher/)                       | Worker class which is used for loading and patching entire folders of assemblies, or alternatively patching and loading assemblies one at a time. |
| [BasePatcher](../bepinex.preloader.core.patching.basepatcher/)                               | A patcher that can contain multiple methods for patching assemblies.                                                                              |
| [ChainloaderLogHelper](../bepinex.preloader.core.logging.chainloaderloghelper/)              |                                                                                                                                                   |
| [ConsoleSetOutFix](../bepinex.preloader.runtimefixes.consolesetoutfix/)                      |                                                                                                                                                   |
| [EnvVars](../bepinex.preloader.core.envvars/)                                                | Doorstop environment variables, passed into the BepInEx preloader. <p>https://github.com/NeighTools/UnityDoorstop/wiki#environment-variables</p>  |
| [HarmonyBackendFix](../bepinex.preloader.runtimefixes.harmonybackendfix/)                    |                                                                                                                                                   |
| [PatchDefinition](../bepinex.preloader.core.patching.patchdefinition/)                       | A definition of an individual patch for use by [AssemblyPatcher](../bepinex.preloader.core.patching.assemblypatcher/).                            |
| [PatcherContext](../bepinex.preloader.core.patching.patchercontext/)                         | Context provided to patcher plugins from the associated patcher engine.                                                                           |
| [PatcherPluginInfoAttribute](../bepinex.preloader.core.patching.patcherplugininfoattribute/) | This attribute denotes that a class is a patcher plugin, and specifies the required metadata.                                                     |
| [PreloaderConsoleListener](../bepinex.preloader.core.logging.preloaderconsolelistener/)      | Log listener that listens to logs during preloading time and buffers messages for output in Unity logs later.                                     |
| [PreloaderLogger](../bepinex.preloader.core.preloaderlogger/)                                |                                                                                                                                                   |
| [TargetAssemblyAttribute](../bepinex.preloader.core.patching.targetassemblyattribute/)       | Defines an assembly that a patch method will target.                                                                                              |
| [TargetTypeAttribute](../bepinex.preloader.core.patching.targettypeattribute/)               | Defines a type that a patch method will target.                                                                                                   |

## Enums

|                                                                                               |     |
| --------------------------------------------------------------------------------------------- | --- |
| [AssemblyBuildInfo.FrameworkType](../bepinex.preloader.core.assemblybuildinfo.frameworktype/) |     |
