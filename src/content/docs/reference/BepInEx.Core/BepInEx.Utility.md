---
title: Utility Class
slug: reference/bepinex.utility
sidebar:
  label: Utility
---

## Definition

Generic helper properties and methods.

```csharp title="C#"
public static class Utility
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Fields

### LoadContext

Assembly Load Context for BepInEx, all game assemblies should be loaded here.

```csharp title="C#"
public static AssemblyLoadContext LoadContext
```

### BepInExVersion

BepInEx version.

```csharp title="C#"
public static Version BepInExVersion
```

## Properties

### CLRSupportsDynamicAssemblies

Whether current Common Language Runtime supports dynamic method generation using `System.Reflection.Emit` namespace.

```csharp title="C#"
public static bool CLRSupportsDynamicAssemblies { get; }
```

### UTF8NoBom

An encoding for UTF-8 which does not emit a byte order mark (BOM).

```csharp title="C#"
public static Encoding UTF8NoBom { get; }
```

## Methods

### TryDo(Action, out Exception)

Try to perform an action.

```csharp title="C#"
public static bool TryDo(Action action, out Exception exception)
```

#### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action/)  
Action to perform.

`exception` [Exception](https://learn.microsoft.com/dotnet/api/system.exception/)  
Possible exception that gets returned.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
True, if action succeeded, false if an exception occured.

### CombinePaths(params string[])

Combines multiple paths together, as the specific method is not available in .NET 3.5.

```csharp title="C#"
public static string CombinePaths(params string[] parts)
```

#### Parameters

`parts` [string[]](https://learn.microsoft.com/dotnet/api/system.string/)  
The multiple paths to combine together.

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
A combined path.

### ParentDirectory(string, int)

Returns the parent directory of a path, optionally specifying the amount of levels.

```csharp title="C#"
public static string ParentDirectory(string path, int levels = 1)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The path to get the parent directory of.

`levels` [int](https://learn.microsoft.com/dotnet/api/system.int32/)  
The amount of levels to traverse. Defaults to 1

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
The parent directory.

### SafeParseBool(string, bool)

Tries to parse a bool, with a default value if unable to parse.

```csharp title="C#"
public static bool SafeParseBool(string input, bool defaultValue = false)
```

#### Parameters

`input` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The string to parse

`defaultValue` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
The value to return if parsing is unsuccessful.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
Boolean value of input if able to be parsed, otherwise default value.

### ConvertToWWWFormat(string)

Converts a file path into a UnityEngine.WWW format.

```csharp title="C#"
public static string ConvertToWWWFormat(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The file path to convert.

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
A converted file path.

### IsNullOrWhiteSpace(string)

Indicates whether a specified string is null, empty, or consists only of white-space characters.

```csharp title="C#"
public static bool IsNullOrWhiteSpace(this string self)
```

#### Parameters

`self` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The string to test.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
True if the value parameter is null or empty, or if value consists exclusively of white-space characters.

### TopologicalSort<TNode>(IEnumerable<TNode>, Func<TNode, IEnumerable<TNode>>)

Sorts a given dependency graph using a direct toposort, reporting possible cyclic dependencies.

```csharp title="C#"
public static IEnumerable<TNode> TopologicalSort<TNode>(IEnumerable<TNode> nodes, Func<TNode, IEnumerable<TNode>> dependencySelector)
```

#### Parameters

`nodes` [IEnumerable\<TNode\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)  
Nodes to sort

`dependencySelector` [Func\<TNode, IEnumerable\<TNode\>\>](https://learn.microsoft.com/dotnet/api/system.func-2/)  
Function that maps a node to a collection of its dependencies.

#### Returns

[IEnumerable\<TNode\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)  
Collection of nodes sorted in the order of least dependencies to the most.

#### Exceptions

[Exception](https://learn.microsoft.com/dotnet/api/system.exception/)  
Thrown when a cyclic dependency occurs.

### TryResolveDllAssembly<T>(AssemblyName, string, Func<string, T>, out T)

Try to resolve and load the given assembly DLL.

```csharp title="C#"
public static bool TryResolveDllAssembly<T>(AssemblyName assemblyName, string directory, Func<string, T> loader, out T assembly) where T : class
```

#### Parameters

`assemblyName` [AssemblyName](https://learn.microsoft.com/dotnet/api/system.reflection.assemblyname/)  
Name of the assembly, of the type <xref href="System.Reflection.AssemblyName" data-throw-if-not-resolved="false"></xref>.

`directory` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Directory to search the assembly from.

`loader` [Func\<string, T\>](https://learn.microsoft.com/dotnet/api/system.func-2/)

`assembly` T  
The loaded assembly.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
True, if the assembly was found and loaded. Otherwise, false.

### IsSubtypeOf(TypeDefinition, Type)

Checks whether a given cecil type definition is a subtype of a provided type.

```csharp title="C#"
public static bool IsSubtypeOf(this TypeDefinition self, Type td)
```

#### Parameters

`self` [TypeDefinition](https://github.com/jbevain/cecil/blob/8c123e16bd0d693afc9932da85e1c9e740aa508c/mono.cecil/typedefinition.cs/)  
Cecil type definition

`td` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  
Type to check against

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
Whether the given cecil type is a subtype of the type.

### TryResolveDllAssembly(AssemblyName, string, out Assembly)

Try to resolve and load the given assembly DLL.

```csharp title="C#"
public static bool TryResolveDllAssembly(AssemblyName assemblyName, string directory, out Assembly assembly)
```

#### Parameters

`assemblyName` [AssemblyName](https://learn.microsoft.com/dotnet/api/system.reflection.assemblyname/)  
Name of the assembly, of the type <xref href="System.Reflection.AssemblyName" data-throw-if-not-resolved="false"></xref>.

`directory` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Directory to search the assembly from.

`assembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly/)  
The loaded assembly.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
True, if the assembly was found and loaded. Otherwise, false.

### TryResolveDllAssembly(AssemblyName, string, ReaderParameters, out AssemblyDefinition)

Try to resolve and load the given assembly DLL.

```csharp title="C#"
public static bool TryResolveDllAssembly(AssemblyName assemblyName, string directory, ReaderParameters readerParameters, out AssemblyDefinition assembly)
```

#### Parameters

`assemblyName` [AssemblyName](https://learn.microsoft.com/dotnet/api/system.reflection.assemblyname/)  
Name of the assembly, of the type <xref href="System.Reflection.AssemblyName" data-throw-if-not-resolved="false"></xref>.

`directory` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Directory to search the assembly from.

`readerParameters` [ReaderParameters](https://github.com/jbevain/cecil/blob/8c123e16bd0d693afc9932da85e1c9e740aa508c/mono.cecil/moduledefinition.cs/)  
Reader parameters that contain possible custom assembly resolver.

`assembly` [AssemblyDefinition](https://github.com/jbevain/cecil/blob/8c123e16bd0d693afc9932da85e1c9e740aa508c/mono.cecil/assemblydefinition.cs/)  
The loaded assembly.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
True, if the assembly was found and loaded. Otherwise, false.

### TryOpenFileStream(string, FileMode, out FileStream, FileAccess, FileShare)

Tries to create a file with the given name

```csharp title="C#"
public static bool TryOpenFileStream(string path, FileMode mode, out FileStream fileStream, FileAccess access = FileAccess.ReadWrite, FileShare share = FileShare.Read)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Path of the file to create

`mode` [FileMode](https://learn.microsoft.com/dotnet/api/system.io.filemode/)  
File open mode

`fileStream` [FileStream](https://learn.microsoft.com/dotnet/api/system.io.filestream/)  
Resulting filestream

`access` [FileAccess](https://learn.microsoft.com/dotnet/api/system.io.fileaccess/)  
File access options

`share` [FileShare](https://learn.microsoft.com/dotnet/api/system.io.fileshare/)  
File share options

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### EnumerateAllMethods(TypeDefinition)

```csharp title="C#"
public static IEnumerable<MethodDefinition> EnumerateAllMethods(this TypeDefinition type)
```

#### Parameters

`type` [TypeDefinition](https://github.com/jbevain/cecil/blob/8c123e16bd0d693afc9932da85e1c9e740aa508c/mono.cecil/typedefinition.cs/)

#### Returns

[IEnumerable\<MethodDefinition\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)

### HashStream(Stream)

Compute a MD5 hash of the given stream.

```csharp title="C#"
public static string HashStream(Stream stream)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream/)  
Stream to hash

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
MD5 hash as a hex string

### HashStrings(params string[])

Hash a list of strings using MD5

```csharp title="C#"
public static string HashStrings(params string[] strings)
```

#### Parameters

`strings` [string[]](https://learn.microsoft.com/dotnet/api/system.string/)  
Strings to hash

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
MD5 of the strings

### ByteArrayToString(byte[])

Convert the given array to a hex string.

```csharp title="C#"
public static string ByteArrayToString(byte[] data)
```

#### Parameters

`data` [byte[]](https://learn.microsoft.com/dotnet/api/system.byte/)  
Bytes to convert.

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
Bytes reinterpreted as a hex number.

### GetCommandLineArgValue(string)

Get a value of a command line argument

```csharp title="C#"
public static string GetCommandLineArgValue(string arg)
```

#### Parameters

`arg` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Argument name

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
Next argument after the given argument name. If not found, returns null.

### TryParseAssemblyName(string, out AssemblyName)

Try to parse given string as an assembly name

```csharp title="C#"
public static bool TryParseAssemblyName(string fullName, out AssemblyName assemblyName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Fully qualified assembly name

`assemblyName` [AssemblyName](https://learn.microsoft.com/dotnet/api/system.reflection.assemblyname/)  
Resulting <xref href="System.Reflection.AssemblyName" data-throw-if-not-resolved="false"></xref> instance

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
`true`, if parsing was successful, otherwise `false`

#### Remarks

On some versions of mono, using [GetName()](https://learn.microsoft.com/dotnet/api/system.reflection.assembly.getname#system-reflection-assembly-getname/) fails because it runs on unmanaged side which has problems with encoding. Using [AssemblyName](https://learn.microsoft.com/dotnet/api/system.reflection.assemblyname/) solves this by doing parsing on managed side instead.

### GetUniqueFilesInDirectories(IEnumerable<string>, string)

Gets unique files in all given directories. If the file with the same name exists in multiple directories, only the first occurrence is returned.

```csharp title="C#"
public static IEnumerable<string> GetUniqueFilesInDirectories(IEnumerable<string> directories, string pattern = "*")
```

#### Parameters

`directories` [IEnumerable\<string\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)  
Directories to search from.

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
File pattern to search.

#### Returns

[IEnumerable\<string\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)  
Collection of all files in the directories.
