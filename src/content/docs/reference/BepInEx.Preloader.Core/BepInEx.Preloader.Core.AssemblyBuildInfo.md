---
title: AssemblyBuildInfo Class
slug: reference/bepinex.preloader.core.assemblybuildinfo
sidebar:
  label: AssemblyBuildInfo
---
## Definition

```csharp title="C#"
public class AssemblyBuildInfo
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Properties

### NetFrameworkVersion

```csharp title="C#"
public Version NetFrameworkVersion { get; }
```

### IsAnyCpu

```csharp title="C#"
public bool IsAnyCpu { get; set; }
```

### Is64Bit

```csharp title="C#"
public bool Is64Bit { get; set; }
```

### AssemblyFrameworkType

```csharp title="C#"
public AssemblyBuildInfo.FrameworkType AssemblyFrameworkType { get; set; }
```

## Methods

### DetermineInfo(AssemblyDefinition)

```csharp title="C#"
public static AssemblyBuildInfo DetermineInfo(AssemblyDefinition assemblyDefinition)
```

#### Parameters

`assemblyDefinition` [AssemblyDefinition](https://github.com/jbevain/cecil/blob/main/mono.cecil/assemblydefinition.cs/)  

#### Returns

[AssemblyBuildInfo](../bepinex.preloader.core.assemblybuildinfo/)

### ToString()

Returns a string that represents the current object.

```csharp title="C#"
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
A string that represents the current object.