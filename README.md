# TMI and Talk Front

CS473 Introduction to Social Computing team TnT Design Project : [Website](http://tmintalk-client.s3-website.ap-northeast-2.amazonaws.com/)

## 

## Getting Started

### Start Front Server
* Environment: [Node.js 14.17.6](https://nodejs.org/en/) \(npm\)
```
$ cd tnt-client
$ npm install
$ npm run start
```

## Implementation

### SignUp & Login & Logout
We implemented a simple SignUp & Login & Logout. Users can sign up by entering their nickname, email, and password. Then users can login by email and password. If users do not log in, you cannot use the services below. You can visit the code at [SignUp](https://github.com/tmintalk/tnt-client/tree/main/src/components/Signup) and [Login](https://github.com/tmintalk/tnt-client/tree/main/src/components/Login), and [Logout](https://github.com/tmintalk/tnt-client/tree/main/src/components/LogoutButton).
  
### Global Question
Global questions are given at the top of the Home Tab. Click on the question you want to answer and the Modal window will appear. When you answer a question, your answer is automatically recorded on MyPage. The more you answer the Global question, the more your profile will be automatically filled. Other friends can see my profile, know what I'm interested in spending, and interact with each other. You can visit the code at [QuestionList](https://github.com/tmintalk/tnt-client/tree/main/src/components/QuestionList)

### Post & Home


### UserList

### Chatting

### MyPage

## Directory

```
tnt-client
├── src
│   ├── actions
│   ├── commons
│   │   ├── fonts
│   │   ├── img
│   ├── components
│   │   ├── //syncopation
│   ├── pages
│   │   ├── Chat
│   │   ├── Home
│   │   ├── Join
│   │   ├── MyPage
│   │   ├── Post
│   │   ├── UserProfile
│   │   ├── Users
│   ├── reducers
│   ├── router
│   ├── services
├── README.md
```

## Contributors

* [**Jiseung**](https://github.com/micko6420)
* [**Seungho**](https://github.com/TheStarkor)
* [**Taewoo**](https://github.com/T-dubb)
* [**Yumi**](https://github.com/woomoo00)
