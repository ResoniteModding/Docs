---
title: BepInEx.Preloader.Core.Patching
slug: reference/bepinex.preloader.core.patching
sidebar:
  order: 0
---
## Classes

| | |
| --- | --- |
| [AssemblyPatcher](../bepinex.preloader.core.patching.assemblypatcher/) | Worker class which is used for loading and patching entire folders of assemblies, or alternatively patching and loading assemblies one at a time. |
| [BasePatcher](../bepinex.preloader.core.patching.basepatcher/) | A patcher that can contain multiple methods for patching assemblies. |
| [PatchDefinition](../bepinex.preloader.core.patching.patchdefinition/) | A definition of an individual patch for use by [AssemblyPatcher](../bepinex.preloader.core.patching.assemblypatcher/). |
| [PatcherContext](../bepinex.preloader.core.patching.patchercontext/) | Context provided to patcher plugins from the associated patcher engine. |
| [PatcherPluginInfoAttribute](../bepinex.preloader.core.patching.patcherplugininfoattribute/) | This attribute denotes that a class is a patcher plugin, and specifies the required metadata. |
| [TargetAssemblyAttribute](../bepinex.preloader.core.patching.targetassemblyattribute/) | Defines an assembly that a patch method will target. |
| [TargetTypeAttribute](../bepinex.preloader.core.patching.targettypeattribute/) | Defines a type that a patch method will target. |