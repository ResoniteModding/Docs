---
title: MetadataHelper Class
slug: reference/bepinex.metadatahelper
sidebar:
  label: MetadataHelper
---
## Definition

Helper class to use for retrieving metadata about a plugin, defined as attributes.

```csharp title="C#"
public static class MetadataHelper
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Methods

### GetMetadata(Type)

Retrieves the BepInPlugin metadata from a plugin type.

```csharp title="C#"
public static BepInPlugin GetMetadata(Type pluginType)
```

#### Parameters

`pluginType` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  
The plugin type.

#### Returns

[BepInPlugin](../bepinex.bepinplugin/)  
The BepInPlugin metadata of the plugin type.

### GetMetadata(object)

Retrieves the BepInPlugin metadata from a plugin instance.

```csharp title="C#"
public static BepInPlugin GetMetadata(object plugin)
```

#### Parameters

`plugin` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
The plugin instance.

#### Returns

[BepInPlugin](../bepinex.bepinplugin/)  
The BepInPlugin metadata of the plugin instance.

### GetAttributes<T>(Type)

Gets the specified attributes of a type, if they exist.

```csharp title="C#"
public static T[] GetAttributes<T>(Type pluginType) where T : Attribute
```

#### Parameters

`pluginType` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  
The plugin type.

#### Returns

T[]  
The attributes of the type, if existing.

### GetAttributes<T>(Assembly)

Gets the specified attributes of an assembly, if they exist.

```csharp title="C#"
public static T[] GetAttributes<T>(Assembly assembly) where T : Attribute
```

#### Parameters

`assembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly/)  
The assembly.

#### Returns

T[]  
The attributes of the type, if existing.

### GetAttributes<T>(object)

Gets the specified attributes of an instance, if they exist.

```csharp title="C#"
public static IEnumerable<T> GetAttributes<T>(object plugin) where T : Attribute
```

#### Parameters

`plugin` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
The plugin instance.

#### Returns

[IEnumerable\<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)  
The attributes of the instance, if existing.

### GetAttributes<T>(MemberInfo)

Gets the specified attributes of a reflection metadata type, if they exist.

```csharp title="C#"
public static T[] GetAttributes<T>(MemberInfo member) where T : Attribute
```

#### Parameters

`member` [MemberInfo](https://learn.microsoft.com/dotnet/api/system.reflection.memberinfo/)  
The reflection metadata instance.

#### Returns

T[]  
The attributes of the instance, if existing.

### GetDependencies(Type)

Retrieves the dependencies of the specified plugin type.

```csharp title="C#"
public static IEnumerable<BepInDependency> GetDependencies(Type plugin)
```

#### Parameters

`plugin` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  
The plugin type.

#### Returns

[IEnumerable\<BepInDependency\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)  
A list of all plugin types that the specified plugin type depends upon.