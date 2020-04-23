---
title: Spring Sloud Pom.xml快速引导
date: 2020-04-19 08:00:00
tags:
 - Spring Cloud
categories:
 - Spring Cloud
---
   * **1、统一依赖管理**<br/>
  
         
              <?xml version="1.0" encoding="UTF-8"?>
              <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
                  <modelVersion>4.0.0</modelVersion>
                  <!--统一依赖管理-->
                  <!--   parent继承springboot-->
                  <parent>
                      <groupId>org.springframework.boot</groupId>
                      <artifactId>spring-boot-starter-parent</artifactId>
                      <version>2.0.3.RELEASE</version>
                  </parent>
              
                  <groupId>com.gwssi.springcloud</groupId>
                  <artifactId>spring-cloud-dependencies</artifactId>
                  <version>1.0.0-SNAPSHOT</version>
                  <packaging>pom</packaging>
              
                  <properties>
                      <!-- Environment Settings -->
                      <java.version>1.8</java.version>
                      <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
                      <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
              
                      <!-- Spring Settings -->
                      <!--Springcloud 的版本-->
                      <spring-cloud.version>Finchley.RELEASE</spring-cloud.version>
                  </properties>
                  <!--Springcloud 的 dependencies-->
                  <dependencyManagement>
                      <dependencies>
                          <dependency>
                              <groupId>org.springframework.cloud</groupId>
                              <artifactId>spring-cloud-dependencies</artifactId>
                              <version>${spring-cloud.version}</version>
                              <type>pom</type>
                              <scope>import</scope>
                          </dependency>
                      </dependencies>
                  </dependencyManagement>
              
                  <build>
                      <plugins>
                          <!-- Compiler 插件, 设定 JDK 版本 -->
                          <plugin>
                              <groupId>org.apache.maven.plugins</groupId>
                              <artifactId>maven-compiler-plugin</artifactId>
                              <configuration>
                                  <showWarnings>true</showWarnings>
                              </configuration>
                          </plugin>
              
                          <!-- 打包 jar 文件时，配置 manifest 文件，加入 lib 包的 jar 依赖 -->
                          <plugin>
                              <groupId>org.apache.maven.plugins</groupId>
                              <artifactId>maven-jar-plugin</artifactId>
                              <configuration>
                                  <archive>
                                      <addMavenDescriptor>false</addMavenDescriptor>
                                  </archive>
                              </configuration>
                              <executions>
                                  <execution>
                                      <configuration>
                                          <archive>
                                              <manifest>
                                                  <!-- Add directory entries -->
                                                  <addDefaultImplementationEntries>true</addDefaultImplementationEntries>
                                                  <addDefaultSpecificationEntries>true</addDefaultSpecificationEntries>
                                                  <addClasspath>true</addClasspath>
                                              </manifest>
                                          </archive>
                                      </configuration>
                                  </execution>
                              </executions>
                          </plugin>
              
                          <!-- resource -->
                          <plugin>
                              <groupId>org.apache.maven.plugins</groupId>
                              <artifactId>maven-resources-plugin</artifactId>
                          </plugin>
              
                          <!-- install -->
                          <plugin>
                              <groupId>org.apache.maven.plugins</groupId>
                              <artifactId>maven-install-plugin</artifactId>
                          </plugin>
              
                          <!-- clean -->
                          <plugin>
                              <groupId>org.apache.maven.plugins</groupId>
                              <artifactId>maven-clean-plugin</artifactId>
                          </plugin>
              
                          <!-- ant -->
                          <plugin>
                              <groupId>org.apache.maven.plugins</groupId>
                              <artifactId>maven-antrun-plugin</artifactId>
                          </plugin>
              
                          <!-- dependency -->
                          <plugin>
                              <groupId>org.apache.maven.plugins</groupId>
                              <artifactId>maven-dependency-plugin</artifactId>
                          </plugin>
                      </plugins>
              
                      <pluginManagement>
                          <plugins>
                              <!-- Java Document Generate -->
                              <plugin>
                                  <groupId>org.apache.maven.plugins</groupId>
                                  <artifactId>maven-javadoc-plugin</artifactId>
                                  <executions>
                                      <execution>
                                          <phase>prepare-package</phase>
                                          <goals>
                                              <goal>jar</goal>
                                          </goals>
                                      </execution>
                                  </executions>
                              </plugin>
              
                              <!-- YUI Compressor (CSS/JS压缩) -->
                              <plugin>
                                  <groupId>net.alchim31.maven</groupId>
                                  <artifactId>yuicompressor-maven-plugin</artifactId>
                                  <version>1.5.1</version>
                                  <executions>
                                      <execution>
                                          <phase>prepare-package</phase>
                                          <goals>
                                              <goal>compress</goal>
                                          </goals>
                                      </execution>
                                  </executions>
                                  <configuration>
                                      <encoding>UTF-8</encoding>
                                      <jswarn>false</jswarn>
                                      <nosuffix>true</nosuffix>
                                      <linebreakpos>30000</linebreakpos>
                                      <force>true</force>
                                      <includes>
                                          <include>**/*.js</include>
                                          <include>**/*.css</include>
                                      </includes>
                                      <excludes>
                                          <exclude>**/*.min.js</exclude>
                                          <exclude>**/*.min.css</exclude>
                                      </excludes>
                                  </configuration>
                              </plugin>
                          </plugins>
                      </pluginManagement>
              
                      <!-- 资源文件配置 -->
                      <resources>
                          <resource>
                              <directory>src/main/java</directory>
                              <excludes>
                                  <exclude>**/*.java</exclude>
                              </excludes>
                          </resource>
                          <resource>
                              <directory>src/main/resources</directory>
                          </resource>
                      </resources>
                  </build>
              
                  <repositories>
                      <repository>
                          <id>aliyun-repos</id>
                          <name>Aliyun Repository</name>
                          <url>http://maven.aliyun.com/nexus/content/groups/public</url>
                          <releases>
                              <enabled>true</enabled>
                          </releases>
                          <snapshots>
                              <enabled>false</enabled>
                          </snapshots>
                      </repository>
              
                      <repository>
                          <id>sonatype-repos</id>
                          <name>Sonatype Repository</name>
                          <url>https://oss.sonatype.org/content/groups/public</url>
                          <releases>
                              <enabled>true</enabled>
                          </releases>
                          <snapshots>
                              <enabled>false</enabled>
                          </snapshots>
                      </repository>
                      <repository>
                          <id>sonatype-repos-s</id>
                          <name>Sonatype Repository</name>
                          <url>https://oss.sonatype.org/content/repositories/snapshots</url>
                          <releases>
                              <enabled>false</enabled>
                          </releases>
                          <snapshots>
                              <enabled>true</enabled>
                          </snapshots>
                      </repository>
              
                      <repository>
                          <id>spring-snapshots</id>
                          <name>Spring Snapshots</name>
                          <url>https://repo.spring.io/snapshot</url>
                          <snapshots>
                              <enabled>true</enabled>
                          </snapshots>
                      </repository>
                      <repository>
                          <id>spring-milestones</id>
                          <name>Spring Milestones</name>
                          <url>https://repo.spring.io/milestone</url>
                          <snapshots>
                              <enabled>false</enabled>
                          </snapshots>
                      </repository>
                  </repositories>
              
                  <pluginRepositories>
                      <pluginRepository>
                          <id>aliyun-repos</id>
                          <name>Aliyun Repository</name>
                          <url>http://maven.aliyun.com/nexus/content/groups/public</url>
                          <releases>
                              <enabled>true</enabled>
                          </releases>
                          <snapshots>
                              <enabled>false</enabled>
                          </snapshots>
                      </pluginRepository>
                  </pluginRepositories>
              </project>


   * **2、Eureka**<br/>
   
         
              <?xml version="1.0" encoding="UTF-8"?>
              <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
                  <modelVersion>4.0.0</modelVersion>
              
                  <parent>
                      <groupId>com.gwssi.springcloud</groupId>
                      <artifactId>spring-cloud-dependencies</artifactId>
                      <version>1.0.0-SNAPSHOT</version>
                      <relativePath>../sping-cloud-dependencies/pom.xml</relativePath>
                  </parent>
              
                  <artifactId>spring-cloud-eureka</artifactId>
                  <packaging>jar</packaging>
              
                  <dependencies>
                      <!-- Spring Boot Begin -->
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-test</artifactId>
                          <scope>test</scope>
                      </dependency>
                      <!-- Spring Boot End -->
              
                      <!-- Spring Cloud Begin -->
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
                      </dependency>
                      <!-- Spring Cloud End -->
                  </dependencies>
              
                  <build>
                      <plugins>
                          <plugin>
                              <groupId>org.springframework.boot</groupId>
                              <artifactId>spring-boot-maven-plugin</artifactId>
                              <configuration>
                                  <mainClass>com.gwssi.spring.cloud.eureka.EurekaApplication</mainClass>
                              </configuration>
                          </plugin>
                      </plugins>
                  </build>
              </project>

   * **3、provider**<br/>
   
         
              <?xml version="1.0" encoding="UTF-8"?>
              <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
                  <modelVersion>4.0.0</modelVersion>
              
                  <parent>
                      <groupId>com.gwssi.springcloud</groupId>
                      <artifactId>spring-cloud-dependencies</artifactId>
                      <version>1.0.0-SNAPSHOT</version>
                      <relativePath>../spring-cloud-dependencies/pom.xml</relativePath>
                  </parent>
              
                  <artifactId>spring-cloud-provider</artifactId>
                  <packaging>jar</packaging>
              
                  <dependencies>
                      <!-- Spring Boot Begin -->
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-test</artifactId>
                          <scope>test</scope>
                      </dependency>
                      <!-- Spring Boot End -->
              
                      <!-- Spring Cloud Begin -->
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
                      </dependency>
                      <!-- Spring Cloud End -->
                  </dependencies>
              
                  <build>
                      <plugins>
                          <plugin>
                              <groupId>org.springframework.boot</groupId>
                              <artifactId>spring-boot-maven-plugin</artifactId>
                              <configuration>
                                  <mainClass>com.gwssi.spring.cloud.provider.ProviderApplication</mainClass>
                              </configuration>
                          </plugin>
                      </plugins>
                  </build>
              </project>
              
   * **4、Ribbon**<br/>
   
         
              <?xml version="1.0" encoding="UTF-8"?>
              <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
                  <modelVersion>4.0.0</modelVersion>
              
                  <parent>
                      <groupId>com.gwssi.springcloud</groupId>
                      <artifactId>spring-cloud-dependencies</artifactId>
                      <version>1.0.0-SNAPSHOT</version>
                      <relativePath>../spring-cloud-dependencies/pom.xml</relativePath>
                  </parent>
              
                  <artifactId>spring-cloud-consumer-ribbon</artifactId>
                  <packaging>jar</packaging>
              
                  <dependencies>
                      <!-- Spring Boot Begin -->
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-web</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-tomcat</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-thymeleaf</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-actuator</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-test</artifactId>
                          <scope>test</scope>
                      </dependency>
                      <!-- Spring Boot End -->
              
                      <!-- Spring Cloud Begin -->
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
                      </dependency>
                      <!-- Spring Cloud End -->
              
                      <!-- 解决 thymeleaf 模板引擎一定要执行严格的 html5 格式校验问题 -->
                      <dependency>
                          <groupId>net.sourceforge.nekohtml</groupId>
                          <artifactId>nekohtml</artifactId>
                      </dependency>
                  </dependencies>
              
                  <build>
                      <plugins>
                          <plugin>
                              <groupId>org.springframework.boot</groupId>
                              <artifactId>spring-boot-maven-plugin</artifactId>
                              <configuration>
                                  <mainClass>com.gwssi.spring.cloud.ribbon.RibbonApplication</mainClass>
                              </configuration>
                          </plugin>
                      </plugins>
                  </build>
              </project>
              
   * **5、Feigen**<br/>
   
         
              <?xml version="1.0" encoding="UTF-8"?>
              <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
                  <modelVersion>4.0.0</modelVersion>
              
                  <parent>
                      <groupId>com.gwssi.springcloud</groupId>
                      <artifactId>spring-cloud-dependencies</artifactId>
                      <version>1.0.0-SNAPSHOT</version>
                      <relativePath>../spring-cloud-dependencies/pom.xml</relativePath>
                  </parent>
              
                  <artifactId>spring-cloud-feign</artifactId>
                  <packaging>jar</packaging>
              
                  <dependencies>
                      <!-- Spring Boot Begin -->
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-web</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-tomcat</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-thymeleaf</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-actuator</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-test</artifactId>
                          <scope>test</scope>
                      </dependency>
                      <!-- Spring Boot End -->
              
                      <!-- Spring Cloud Begin -->
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-openfeign</artifactId>
                      </dependency>
                      <!-- Spring Cloud End -->
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>
                      </dependency>
                      <!-- 解决 thymeleaf 模板引擎一定要执行严格的 html5 格式校验问题 -->
                      <dependency>
                          <groupId>net.sourceforge.nekohtml</groupId>
                          <artifactId>nekohtml</artifactId>
                      </dependency>
                  </dependencies>
              
                  <build>
                      <plugins>
                          <plugin>
                              <groupId>org.springframework.boot</groupId>
                              <artifactId>spring-boot-maven-plugin</artifactId>
                              <configuration>
                                  <mainClass>com.gwssi.spring.cloud.feign.FeignApplication</mainClass>
                              </configuration>
                          </plugin>
                      </plugins>
                  </build>
              </project>
              
   * **6、Zuul**<br/>
   
         
              <?xml version="1.0" encoding="UTF-8"?>
              <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
                  <modelVersion>4.0.0</modelVersion>
              
                  <parent>
                      <groupId>com.gwssi.springcloud</groupId>
                      <artifactId>spring-cloud-dependencies</artifactId>
                      <version>1.0.0-SNAPSHOT</version>
                      <relativePath>../spring-cloud-dependencies/pom.xml</relativePath>
                  </parent>
              
                  <artifactId>spring-cloud-zuul</artifactId>
                  <packaging>jar</packaging>
              
                  <dependencies>
                      <!-- Spring Boot Begin -->
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-web</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-tomcat</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-thymeleaf</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-actuator</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.boot</groupId>
                          <artifactId>spring-boot-starter-test</artifactId>
                          <scope>test</scope>
                      </dependency>
                      <!-- Spring Boot End -->
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-zuul</artifactId>
                      </dependency>
                  </dependencies>
              
                  <build>
                      <plugins>
                          <plugin>
                              <groupId>org.springframework.boot</groupId>
                              <artifactId>spring-boot-maven-plugin</artifactId>
                              <configuration>
                                  <mainClass>com.gwssi.spring.cloud.zuul.ZuulApplication</mainClass>
                              </configuration>
                          </plugin>
                      </plugins>
                  </build>
              </project>

                 
&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 