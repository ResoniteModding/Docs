---
title: TargetTypeAttribute Class
slug: reference/bepinex.preloader.core.patching.targettypeattribute
sidebar:
  label: TargetTypeAttribute
---

## Definition

Defines a type that a patch method will target.

```csharp title="C#"
[AttributeUsage(AttributeTargets.Method)]
public class TargetTypeAttribute : Attribute
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute/)

## Constructors

### TargetTypeAttribute(string, string)

```csharp title="C#"
public TargetTypeAttribute(string targetAssembly, string targetType)
```

#### Parameters

`targetAssembly` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The short filename of the assembly of which <code class="paramref">targetType</code> belongs to.

`targetType` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The full name of the type to target for patching.

## Properties

### TargetAssembly

The short filename of the assembly to target.

```csharp title="C#"
public string TargetAssembly { get; }
```

### TargetType

The full name of the type to target for patching.

```csharp title="C#"
public string TargetType { get; }
```
