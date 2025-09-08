---
title: TomlTypeConverter Class
slug: reference/bepinex.configuration.tomltypeconverter
sidebar:
  label: TomlTypeConverter
---
## Definition

Serializer/deserializer used by the config system.

```csharp title="C#"
public static class TomlTypeConverter
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Methods

### ConvertToString(object, Type)

Convert object of a given type to a string using available converters.

```csharp title="C#"
public static string ConvertToString(object value, Type valueType)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object/)  

`valueType` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)

### ConvertToValue<T>(string)

Convert string to an object of a given type using available converters.

```csharp title="C#"
public static T ConvertToValue<T>(string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

#### Returns

T

### ConvertToValue(string, Type)

Convert string to an object of a given type using available converters.

```csharp title="C#"
public static object ConvertToValue(string value, Type valueType)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

`valueType` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  

#### Returns

[object](https://learn.microsoft.com/dotnet/api/system.object/)

### GetConverter(Type)

Get a converter for a given type if there is any.

```csharp title="C#"
public static TypeConverter GetConverter(Type valueType)
```

#### Parameters

`valueType` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  

#### Returns

[TypeConverter](../bepinex.configuration.typeconverter/)

### AddConverter(Type, TypeConverter)

Add a new type converter for a given type. If a different converter is already added, this call is ignored and false is returned.

```csharp title="C#"
public static bool AddConverter(Type type, TypeConverter converter)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  

`converter` [TypeConverter](../bepinex.configuration.typeconverter/)  

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### CanConvert(Type)

Check if a given type can be converted to and from string.

```csharp title="C#"
public static bool CanConvert(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### GetSupportedTypes()

Give a list of types with registered converters.

```csharp title="C#"
public static IEnumerable<Type> GetSupportedTypes()
```

#### Returns

[IEnumerable\<Type\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/)