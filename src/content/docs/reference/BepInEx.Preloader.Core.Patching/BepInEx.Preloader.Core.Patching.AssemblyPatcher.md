---
title: AssemblyPatcher Class
slug: reference/bepinex.preloader.core.patching.assemblypatcher
sidebar:
  label: AssemblyPatcher
---
## Definition

Worker class which is used for loading and patching entire folders of assemblies, or alternatively patching and loading assemblies one at a time.

```csharp title="C#"
public class AssemblyPatcher : IDisposable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

Implements [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable/)

## Constructors

### AssemblyPatcher(Func<byte[], string, Assembly>)

```csharp title="C#"
public AssemblyPatcher(Func<byte[], string, Assembly> assemblyLoader)
```

#### Parameters

`assemblyLoader` [Func\<byte[], string, Assembly\>](https://learn.microsoft.com/dotnet/api/system.func-3/)  


## Properties

### PatcherContext

The context of this assembly patcher instance that is passed to all patcher plugins.

```csharp title="C#"
public PatcherContext PatcherContext { get; }
```

## Methods

### Dispose()

Performs work to dispose collection objects.

```csharp title="C#"
public void Dispose()
```


### AddPatchersFromDirectory(string)

Adds all patchers from all managed assemblies specified in a directory.

```csharp title="C#"
public void AddPatchersFromDirectory(string directory)
```

#### Parameters

`directory` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Directory to search patcher DLLs from.


### LoadAssemblyDirectories(params string[])

Adds all .dll assemblies in given directories to be patched and loaded by this patcher instance. Non-managed assemblies are skipped.

```csharp title="C#"
public void LoadAssemblyDirectories(params string[] directories)
```

#### Parameters

`directories` [string[]](https://learn.microsoft.com/dotnet/api/system.string/)  
The directories to search.


### LoadAssemblyDirectories(IEnumerable<string>, IEnumerable<string>)

Adds all assemblies in given directories to be patched and loaded by this patcher instance. Non-managed assemblies are skipped.

```csharp title="C#"
public void LoadAssemblyDirectories(IEnumerable<string> directories, IEnumerable<string> assemblyExtensions)
```

#### Parameters

`directories` [IEnumerable\<string\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)  
The directory to search.

`assemblyExtensions` [IEnumerable\<string\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)  
The file extensions to attempt to load.


### TryLoadAssembly(string, out AssemblyDefinition)

Attempts to load a managed assembly as an [AssemblyDefinition](https://github.com/jbevain/cecil/blob/main/mono.cecil/assemblydefinition.cs/). Returns true if successful.

```csharp title="C#"
public static bool TryLoadAssembly(string path, out AssemblyDefinition assembly)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The path of the assembly.

`assembly` [AssemblyDefinition](https://github.com/jbevain/cecil/blob/main/mono.cecil/assemblydefinition.cs/)  
The loaded assembly. Null if not successful in loading.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### PatchAndLoad()

Applies patchers to all assemblies loaded into this assembly patcher and then loads patched assemblies into memory.

```csharp title="C#"
public void PatchAndLoad()
```