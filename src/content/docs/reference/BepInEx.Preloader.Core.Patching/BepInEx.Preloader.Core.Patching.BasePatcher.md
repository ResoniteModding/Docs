---
title: BasePatcher Class
slug: reference/bepinex.preloader.core.patching.basepatcher
sidebar:
  label: BasePatcher
---
## Definition

A patcher that can contain multiple methods for patching assemblies.

```csharp title="C#"
public abstract class BasePatcher
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Constructors

### BasePatcher()

```csharp title="C#"
protected BasePatcher()
```


## Properties

### Log

A [ILogSource](../bepinex.logging.ilogsource/) instance created for use by this patcher plugin.

```csharp title="C#"
public ManualLogSource Log { get; }
```

### Config

A configuration file binding created with the [GUID](../bepinex.preloader.core.patching.patcherplugininfoattribute/#guid/) of this plugin as the filename.

```csharp title="C#"
public ConfigFile Config { get; }
```

### Info

Metadata associated with this patcher plugin.

```csharp title="C#"
public PatcherPluginInfoAttribute Info { get; }
```

### Context

The context of the [AssemblyPatcher](../bepinex.preloader.core.patching.assemblypatcher/) this BasePatcher is associated with.

```csharp title="C#"
public PatcherContext Context { get; set; }
```

## Methods

### Initialize()

Executed before any patches from any plugin are applied.

```csharp title="C#"
public virtual void Initialize()
```


### Finalizer()

Executed after all patches from all plugins have been applied.

```csharp title="C#"
public virtual void Finalizer()
```