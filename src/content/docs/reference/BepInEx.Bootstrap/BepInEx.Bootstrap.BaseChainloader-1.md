---
title: BaseChainloader<TPlugin> Class
slug: reference/bepinex.bootstrap.basechainloader-1
sidebar:
  label: BaseChainloader<TPlugin>
---
## Definition

```csharp title="C#"
public abstract class BaseChainloader<TPlugin>
```

### Type Parameters

`TPlugin`  


Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Fields

### CurrentAssemblyName

```csharp title="C#"
protected static readonly string CurrentAssemblyName
```

### CurrentAssemblyVersion

```csharp title="C#"
protected static readonly Version CurrentAssemblyVersion
```

## Properties

### ConsoleTitle

```csharp title="C#"
protected virtual string ConsoleTitle { get; }
```

### Plugins

List of all [PluginInfo](../bepinex.plugininfo/) instances loaded via the chainloader.

```csharp title="C#"
public Dictionary<string, PluginInfo> Plugins { get; }
```

### DependencyErrors

Collection of error chainloader messages that occured during plugin loading. Contains information about what certain plugins were not loaded.

```csharp title="C#"
public List<string> DependencyErrors { get; }
```

## Methods

### ToPluginInfo(TypeDefinition, string)

Analyzes the given type definition and attempts to convert it to a valid [PluginInfo](../bepinex.plugininfo/)

```csharp title="C#"
public static PluginInfo ToPluginInfo(TypeDefinition type, string assemblyLocation)
```

#### Parameters

`type` [TypeDefinition](https://github.com/jbevain/cecil/blob/main/mono.cecil/typedefinition.cs/)  
Type definition to analyze.

`assemblyLocation` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The filepath of the assembly, to keep as metadata.

#### Returns

[PluginInfo](../bepinex.plugininfo/)  
If the type represent a valid plugin, returns a [PluginInfo](../bepinex.plugininfo/) instance. Otherwise, return null.

### HasBepinPlugins(AssemblyDefinition)

```csharp title="C#"
protected static bool HasBepinPlugins(AssemblyDefinition ass)
```

#### Parameters

`ass` [AssemblyDefinition](https://github.com/jbevain/cecil/blob/main/mono.cecil/assemblydefinition.cs/)  

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### PluginTargetsWrongBepin(PluginInfo)

```csharp title="C#"
protected static bool PluginTargetsWrongBepin(PluginInfo pluginInfo)
```

#### Parameters

`pluginInfo` [PluginInfo](../bepinex.plugininfo/)  

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### Initialize(string)

```csharp title="C#"
public virtual void Initialize(string gameExePath = null)
```

#### Parameters

`gameExePath` [string](https://learn.microsoft.com/dotnet/api/system.string/)  


### InitializeLoggers()

```csharp title="C#"
protected virtual void InitializeLoggers()
```


### DiscoverPluginsFrom(string, string)

Discovers all plugins in the plugin directory without loading them.

```csharp title="C#"
protected IList<PluginInfo> DiscoverPluginsFrom(string path, string cacheName = "chainloader")
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Path from which to search the plugins.

`cacheName` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Cache name to use. If null, results are not cached.

#### Returns

[IList\<PluginInfo\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1/)  
List of discovered plugins and their metadata.
#### Remarks

This is useful for discovering BepInEx plugin metadata.

### DiscoverPlugins()

Discovers plugins to load.

```csharp title="C#"
protected virtual IList<PluginInfo> DiscoverPlugins()
```

#### Returns

[IList\<PluginInfo\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1/)  
List of plugins to be loaded.

### ModifyLoadOrder(IList<PluginInfo>)

Preprocess the plugins and modify the load order.

```csharp title="C#"
protected virtual IList<PluginInfo> ModifyLoadOrder(IList<PluginInfo> plugins)
```

#### Parameters

`plugins` [IList\<PluginInfo\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1/)  
Plugins to process.

#### Returns

[IList\<PluginInfo\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1/)  
List of plugins to load in the correct load order.
#### Remarks

Some plugins may be skipped if they cannot be loaded (wrong metadata, etc).

### Execute()

Run the chainloader and load all plugins from the plugins folder.

```csharp title="C#"
public virtual void Execute()
```


### LoadPlugins(params string[])

Detects and loads all plugins in the specified directories.

```csharp title="C#"
public IList<PluginInfo> LoadPlugins(params string[] pluginsPaths)
```

#### Parameters

`pluginsPaths` [string[]](https://learn.microsoft.com/dotnet/api/system.string/)  
Directories to search the plugins from.

#### Returns

[IList\<PluginInfo\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1/)  
List of loaded plugin infos.
#### Remarks

It is better to collect all paths at once and use a single call to LoadPlugins than multiple calls. This allows to run proper dependency resolving and to load all plugins in one go.

### LoadPlugin(PluginInfo, Assembly)

```csharp title="C#"
public abstract TPlugin LoadPlugin(PluginInfo pluginInfo, Assembly pluginAssembly)
```

#### Parameters

`pluginInfo` [PluginInfo](../bepinex.plugininfo/)  

`pluginAssembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly/)  

#### Returns

TPlugin

## Events

### PluginLoaded

Occurs after a plugin is loaded.

```csharp title="C#"
public event Action<PluginInfo> PluginLoaded
```

#### Event Type

[Action\<PluginInfo\>](https://learn.microsoft.com/dotnet/api/system.action-1/)
### Finished

Occurs after all plugins are loaded.

```csharp title="C#"
public event Action Finished
```

#### Event Type

[Action](https://learn.microsoft.com/dotnet/api/system.action/)