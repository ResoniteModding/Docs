---
title: Paths Class
slug: reference/bepinex.paths
sidebar:
  label: Paths
---
## Definition

Paths used by BepInEx

```csharp title="C#"
public static class Paths
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Properties

### BepInExAssemblyDirectory

The directory that the core BepInEx DLLs reside in.

```csharp title="C#"
public static string BepInExAssemblyDirectory { get; }
```

### BepInExAssemblyPath

The path to the core BepInEx DLL.

```csharp title="C#"
public static string BepInExAssemblyPath { get; }
```

### BepInExRootPath

The path to the main BepInEx folder.

```csharp title="C#"
public static string BepInExRootPath { get; }
```

### ExecutablePath

The path of the currently executing program BepInEx is encapsulated in.

```csharp title="C#"
public static string ExecutablePath { get; }
```

### GameRootPath

The directory that the currently executing process resides in. <p>On OSX however, this is the parent directory of the game.app folder.</p>

```csharp title="C#"
public static string GameRootPath { get; }
```

### ConfigPath

The path to the config directory.

```csharp title="C#"
public static string ConfigPath { get; }
```

### BepInExConfigPath

The path to the global BepInEx configuration file.

```csharp title="C#"
public static string BepInExConfigPath { get; }
```

### CachePath

The path to temporary cache files.

```csharp title="C#"
public static string CachePath { get; }
```

### PatcherPluginPath

The path to the patcher plugin folder which resides in the BepInEx folder.

```csharp title="C#"
public static string PatcherPluginPath { get; }
```

### PluginPath

The path to the plugin folder which resides in the BepInEx folder. <p>     This is ONLY guaranteed to be set correctly when Chainloader has been initialized. </p>

```csharp title="C#"
public static string PluginPath { get; }
```

### ProcessName

The name of the currently executing process.

```csharp title="C#"
public static string ProcessName { get; }
```

### DllSearchPaths

List of directories from where Mono will search assemblies before assembly resolving is invoked.

```csharp title="C#"
public static string[] DllSearchPaths { get; }
```

## Methods

### SetExecutablePath(string, string, string, bool, string[])

```csharp title="C#"
public static void SetExecutablePath(string executablePath, string bepinRootPath = null, string managedPath = null, bool gameDataRelativeToManaged = false, string[] dllSearchPath = null)
```

#### Parameters

`executablePath` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

`bepinRootPath` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

`managedPath` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

`gameDataRelativeToManaged` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  

`dllSearchPath` [string[]](https://learn.microsoft.com/dotnet/api/system.string/)