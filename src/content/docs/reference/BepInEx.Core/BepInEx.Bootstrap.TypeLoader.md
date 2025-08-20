---
title: TypeLoader Class
slug: reference/bepinex.bootstrap.typeloader
sidebar:
  label: TypeLoader
---
## Definition

Provides methods for loading specified types from an assembly.

```csharp title="C#"
public static class TypeLoader
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Fields

### CecilResolver

Default assembly resolved used by the [TypeLoader](../bepinex.bootstrap.typeloader/)

```csharp title="C#"
public static readonly DefaultAssemblyResolver CecilResolver
```

### ReaderParameters

Default reader parameters used by [TypeLoader](../bepinex.bootstrap.typeloader/)

```csharp title="C#"
public static readonly ReaderParameters ReaderParameters
```

### SearchDirectories

```csharp title="C#"
public static HashSet<string> SearchDirectories
```

## Methods

### CecilResolveOnFailure(object, AssemblyNameReference)

```csharp title="C#"
public static AssemblyDefinition CecilResolveOnFailure(object sender, AssemblyNameReference reference)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object/)  

`reference` [AssemblyNameReference](https://github.com/jbevain/cecil/blob/8c123e16bd0d693afc9932da85e1c9e740aa508c/mono.cecil/assemblynamereference.cs/)  

#### Returns

[AssemblyDefinition](https://github.com/jbevain/cecil/blob/8c123e16bd0d693afc9932da85e1c9e740aa508c/mono.cecil/assemblydefinition.cs/)

### FindPluginTypes<T>(string, Func<TypeDefinition, string, T>, Func<AssemblyDefinition, bool>, string)

Looks up assemblies in the given directory and locates all types that can be loaded and collects their metadata.

```csharp title="C#"
public static Dictionary<string, List<T>> FindPluginTypes<T>(string directory, Func<TypeDefinition, string, T> typeSelector, Func<AssemblyDefinition, bool> assemblyFilter = null, string cacheName = null) where T : ICacheable, new()
```

#### Parameters

`directory` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The directory to search for assemblies.

`typeSelector` [Func\<TypeDefinition, string, T\>](https://learn.microsoft.com/dotnet/api/system.func-3/)  
A function to check if a type should be selected and to build the type metadata.

`assemblyFilter` [Func\<AssemblyDefinition, bool\>](https://learn.microsoft.com/dotnet/api/system.func-2/)  
A filter function to quickly determine if the assembly can be loaded.

`cacheName` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The name of the cache to get cached types from.

#### Returns

[Dictionary\<string, List\<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2/)  
A dictionary of all assemblies in the directory and the list of type metadatas of types that match the selector.

### LoadAssemblyCache<T>(string)

Loads an index of type metadatas from a cache.

```csharp title="C#"
public static Dictionary<string, CachedAssembly<T>> LoadAssemblyCache<T>(string cacheName) where T : ICacheable, new()
```

#### Parameters

`cacheName` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the cache

#### Returns

[Dictionary\<string, CachedAssembly\<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2/)  
Cached type metadatas indexed by the path of the assembly that defines the type. If no cache is defined, return null.

### SaveAssemblyCache<T>(string, Dictionary<string, List<T>>, Dictionary<string, string>)

Saves indexed type metadata into a cache.

```csharp title="C#"
public static void SaveAssemblyCache<T>(string cacheName, Dictionary<string, List<T>> entries, Dictionary<string, string> hashes) where T : ICacheable
```

#### Parameters

`cacheName` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the cache

`entries` [Dictionary\<string, List\<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2/)  
List of plugin metadatas indexed by the path to the assembly that contains the types

`hashes` [Dictionary\<string, string\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2/)  
Hash values that can be used for checking similarity between cached and live assembly


### TypeLoadExceptionToString(ReflectionTypeLoadException)

Converts TypeLoadException to a readable string.

```csharp title="C#"
public static string TypeLoadExceptionToString(ReflectionTypeLoadException ex)
```

#### Parameters

`ex` [ReflectionTypeLoadException](https://learn.microsoft.com/dotnet/api/system.reflection.reflectiontypeloadexception/)  
TypeLoadException

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
Readable representation of the exception

## Events

### AssemblyResolve

Event fired when [TypeLoader](../bepinex.bootstrap.typeloader/) fails to resolve a type during type loading.

```csharp title="C#"
public static event AssemblyResolveEventHandler AssemblyResolve
```

#### Event Type

[AssemblyResolveEventHandler](https://github.com/jbevain/cecil/blob/8c123e16bd0d693afc9932da85e1c9e740aa508c/mono.cecil/baseassemblyresolver.cs/)