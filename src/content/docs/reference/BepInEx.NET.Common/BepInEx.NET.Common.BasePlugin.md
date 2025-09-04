---
title: BasePlugin Class
slug: reference/bepinex.net.common.baseplugin
sidebar:
  label: BasePlugin
---
## Definition

```csharp title="C#"
public abstract class BasePlugin
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Constructors

### BasePlugin()

```csharp title="C#"
protected BasePlugin()
```


## Properties

### Log

```csharp title="C#"
public ManualLogSource Log { get; }
```

### Config

```csharp title="C#"
public ConfigFile Config { get; }
```

### HarmonyInstance

```csharp title="C#"
public Harmony HarmonyInstance { get; set; }
```

## Methods

### Load()

```csharp title="C#"
public abstract void Load()
```


### Unload()

```csharp title="C#"
public virtual bool Unload()
```

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)