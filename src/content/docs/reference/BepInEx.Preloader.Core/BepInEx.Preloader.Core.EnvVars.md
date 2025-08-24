---
title: EnvVars Class
slug: reference/bepinex.preloader.core.envvars
sidebar:
  label: EnvVars
---
## Definition

Doorstop environment variables, passed into the BepInEx preloader. <p>https://github.com/NeighTools/UnityDoorstop/wiki#environment-variables</p>

```csharp title="C#"
public static class EnvVars
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Properties

### DOORSTOP_INVOKE_DLL_PATH

Path to the assembly that was invoked via Doorstop. Contains the same value as in "targetAssembly" configuration option in the config file.

```csharp title="C#"
public static string DOORSTOP_INVOKE_DLL_PATH { get; }
```

### DOORSTOP_MANAGED_FOLDER_DIR

Full path to the game's "Managed" folder that contains all the game's managed assemblies

```csharp title="C#"
public static string DOORSTOP_MANAGED_FOLDER_DIR { get; }
```

### DOORSTOP_PROCESS_PATH

Full path to the game executable currently running.

```csharp title="C#"
public static string DOORSTOP_PROCESS_PATH { get; }
```

### DOORSTOP_DLL_SEARCH_DIRS

Array of paths where Mono searches DLLs from before assembly resolvers are invoked.

```csharp title="C#"
public static string[] DOORSTOP_DLL_SEARCH_DIRS { get; }
```

### DOORSTOP_MONO_LIB_PATH

Path of the DLL that contains mono imports.

```csharp title="C#"
public static string DOORSTOP_MONO_LIB_PATH { get; }
```