## 别称

工具包

## 目的

定义了一个创建对象的接口，用于创建**一组**相关的对象.

## 程序示例

```java
/**
 * 抽象产品
 */
interface CPU {
}

interface RAM {
}

/**
 * 抽象每个产品的工厂
 */
interface CPUFactory {
    CPU createCPU();
}

interface RAMFactory {
    RAM createRAM();
}

/**
 * 实现具体的产品
 */
class WindowsCPU implements CPU {
}

class WindowsRAM implements RAM {
}

class MacCPU implements CPU {
}

class MacRAM implements RAM {
}

/**
 * 工厂方法的具体实现
 */
class WindowsCPUFactory implements CPUFactory {
    @Override
    public CPU createCPU() {
        return new WindowsCPU();
    }
}

class WindowsRAMFactory implements RAMFactory {

    @Override
    public RAM createRAM() {
        return new WindowsRAM();
    }
}

class MacCPUFactory implements CPUFactory {

    @Override
    public CPU createCPU() {
        return new MacCPU();
    }
}

class MacRAMFactory implements RAMFactory {

    @Override
    public RAM createRAM() {
        return new MacRAM();
    }
}

/**
 * 定义抽象工厂
 */
interface PCAbstractFactory {
    CPU createCPU();

    RAM createRAM();
}

/**
 * Mac 工厂的实现
 */
class MacFactory implements PCAbstractFactory {

    @Override
    public CPU createCPU() {
        return new MacCPUFactory().createCPU();
    }

    @Override
    public RAM createRAM() {
        return new MacRAMFactory().createRAM();
    }
}

/**
 * Windows 工厂实现
 */
class WindowsFactory implements PCAbstractFactory {

    @Override
    public CPU createCPU() {
        return new WindowsCPUFactory().createCPU();
    }

    @Override
    public RAM createRAM() {
        return new WindowsRAMFactory().createRAM();
    }
}


public class AbstractFactory {
    public static void main(String[] args) {
        PCAbstractFactory factory = new MacFactory();
        CPU cpu = factory.createCPU();
        RAM ram = factory.createRAM();
    }
}
```

## UML图

![image](./assets/AbstractFactory.png)

## 优点

1. 将产品的生产分离出来；
2. 易于改变产品系列；
3. 利于产品的一致性，一次性生产一系列产品。

## 缺点

1. 不利于新增产品，新增则抽象工厂及工厂实现类均要增加相关类。

## Java中的用例

- [javax.xml.parsers.DocumentBuilderFactory](http://docs.oracle.com/javase/8/docs/api/javax/xml/parsers/DocumentBuilderFactory.html)
- [javax.xml.transform.TransformerFactory](http://docs.oracle.com/javase/8/docs/api/javax/xml/transform/TransformerFactory.html#newInstance--)
- [javax.xml.xpath.XPathFactory](http://docs.oracle.com/javase/8/docs/api/javax/xml/xpath/XPathFactory.html#newInstance--)
