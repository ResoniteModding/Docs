---
title: NetChainloader Class
slug: reference/bepinex.net.common.netchainloader
sidebar:
  label: NetChainloader
---
## Definition

```csharp title="C#"
public class NetChainloader : BaseChainloader<BasePlugin>
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [BaseChainloader\<BasePlugin\>](../bepinex.bootstrap.basechainloader-1/)

## Properties

### Instance

```csharp title="C#"
public static NetChainloader Instance { get; set; }
```

## Methods

### Initialize(string)

```csharp title="C#"
public override void Initialize(string gameExePath = null)
```

#### Parameters

`gameExePath` [string](https://learn.microsoft.com/dotnet/api/system.string/)  


### LoadPlugin(PluginInfo, Assembly)

```csharp title="C#"
public override BasePlugin LoadPlugin(PluginInfo pluginInfo, Assembly pluginAssembly)
```

#### Parameters

`pluginInfo` [PluginInfo](../bepinex.plugininfo/)  

`pluginAssembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly/)  

#### Returns

[BasePlugin](../bepinex.net.common.baseplugin/)

### InitializeLoggers()

```csharp title="C#"
protected override void InitializeLoggers()
```