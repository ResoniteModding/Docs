---
title: BepInDependency.DependencyFlags Enum
slug: reference/bepinex.bepindependency.dependencyflags
sidebar:
  label: BepInDependency.DependencyFlags
---
## Definition

Flags that are applied to a dependency

```csharp title="C#"
[Flags]
public enum BepInDependency.DependencyFlags
```


## Fields

### HardDependency

The plugin has a hard dependency on the referenced plugin, and will not run without it.

```csharp title="C#"
HardDependency = 1
```

### SoftDependency

This plugin has a soft dependency on the referenced plugin, and is able to run without it.

```csharp title="C#"
SoftDependency = 2
```