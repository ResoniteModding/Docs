---
title: TargetAssemblyAttribute Class
slug: reference/bepinex.preloader.core.patching.targetassemblyattribute
sidebar:
  label: TargetAssemblyAttribute
---

## Definition

Defines an assembly that a patch method will target.

```csharp title="C#"
[AttributeUsage(AttributeTargets.Method)]
public class TargetAssemblyAttribute : Attribute
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute/)

## Constructors

### TargetAssemblyAttribute(string)

```csharp title="C#"
public TargetAssemblyAttribute(string targetAssembly)
```

#### Parameters

`targetAssembly` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The short filename of the assembly. Use <xref href="BepInEx.Preloader.Core.Patching.TargetAssemblyAttribute.AllAssemblies" data-throw-if-not-resolved="false"></xref> to mark all possible
assemblies as targets.

## Fields

### AllAssemblies

Marker used to indicate all possible assemblies to be targeted by a patch method.

```csharp title="C#"
public const string AllAssemblies = "_all"
```

## Properties

### TargetAssembly

The short filename of the assembly to target.

```csharp title="C#"
public string TargetAssembly { get; }
```
