---
title: TypeConverter Class
slug: reference/bepinex.configuration.typeconverter
sidebar:
  label: TypeConverter
---

## Definition

A serializer/deserializer combo for some type(s). Used by the config system.

```csharp title="C#"
public class TypeConverter
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Properties

### ConvertToString

Used to serialize the type into a (hopefully) human-readable string. Object is the instance to serialize, Type is the object's type.

```csharp title="C#"
public Func<object, Type, string> ConvertToString { get; set; }
```

### ConvertToObject

Used to deserialize the type from a string. String is the data to deserialize, Type is the object's type, should return instance to an object of Type.

```csharp title="C#"
public Func<string, Type, object> ConvertToObject { get; set; }
```
