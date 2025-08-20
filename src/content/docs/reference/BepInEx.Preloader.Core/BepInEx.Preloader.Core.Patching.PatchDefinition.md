---
title: PatchDefinition Class
slug: reference/bepinex.preloader.core.patching.patchdefinition
sidebar:
  label: PatchDefinition
---

## Definition

A definition of an individual patch for use by [AssemblyPatcher](../bepinex.preloader.core.patching.assemblypatcher/).

```csharp title="C#"
public class PatchDefinition
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Constructors

### PatchDefinition(TargetAssemblyAttribute, BasePatcher, MethodInfo)

```csharp title="C#"
public PatchDefinition(TargetAssemblyAttribute targetAssembly, BasePatcher instance, MethodInfo methodInfo)
```

#### Parameters

`targetAssembly` [TargetAssemblyAttribute](../bepinex.preloader.core.patching.targetassemblyattribute/)

`instance` [BasePatcher](../bepinex.preloader.core.patching.basepatcher/)

`methodInfo` [MethodInfo](https://learn.microsoft.com/dotnet/api/system.reflection.methodinfo/)

### PatchDefinition(TargetTypeAttribute, BasePatcher, MethodInfo)

```csharp title="C#"
public PatchDefinition(TargetTypeAttribute targetType, BasePatcher instance, MethodInfo methodInfo)
```

#### Parameters

`targetType` [TargetTypeAttribute](../bepinex.preloader.core.patching.targettypeattribute/)

`instance` [BasePatcher](../bepinex.preloader.core.patching.basepatcher/)

`methodInfo` [MethodInfo](https://learn.microsoft.com/dotnet/api/system.reflection.methodinfo/)

## Properties

### TargetAssembly

The assembly / assemblies this patch will target, if there any.

```csharp title="C#"
public TargetAssemblyAttribute TargetAssembly { get; }
```

### TargetType

The type / types this patch will target, if there are any.

```csharp title="C#"
public TargetTypeAttribute TargetType { get; }
```

### Instance

The instance of the [BasePatcher](../bepinex.preloader.core.patching.basepatcher/) this [PatchDefinition](../bepinex.preloader.core.patching.patchdefinition/) originates from.

```csharp title="C#"
public BasePatcher Instance { get; }
```

### MethodInfo

The method that will perform the patching logic defined by this [PatchDefinition](../bepinex.preloader.core.patching.patchdefinition/) instance.

```csharp title="C#"
public MethodInfo MethodInfo { get; }
```

### FullName

A friendly name for this patch definition, for use in logging and error tracking.

```csharp title="C#"
public string FullName { get; }
```
