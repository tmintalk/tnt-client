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
You can interact with other people by posting how much, what you bought, and how you felt. You can attach a image to detail what you bought. Posts posted by people can be viewed on the Home tab.  
  **However, you can't know who posted the posts, because posts are anonymized.If you want to know who posted it, just respond to the post! Then the nickname and thumbnail will be revealed.You can also find out author by talking to author with the chat button on the post.**  
  You can go to the author's profile by clicking on the nickname or profile.
  This will be a good opportunity to increase interaction with people you are not familiar with.
  You can visit the code at [Home](https://github.com/tmintalk/tnt-client/tree/main/src/components/PostList) and [NewPost](https://github.com/tmintalk/tnt-client/tree/main/src/components/PostForm).

### UserList
You can see the full list of users. At first, we planned a friend list by creating a follow and unfollow function, **but it has not been implemented yet.** You can access the profile of the user you want to know from the user list. You can also chat with that user by clicking the chat button on the right. You can visit the code at [UserList](https://github.com/tmintalk/tnt-client/tree/main/src/components/UserList).

### Chatting

#### ChatList
First of all, in the chat list, the history of chatting so far is sorted in order of latest. You can check the number of unread messages in each chat history box. You can also go to friend's profile by tapping his profile thumbnail. You can visit the code at [ChatList](https://github.com/tmintalk/tnt-client/tree/main/src/components/ChatList)

#### ChatRoom
In ChatRoom, you can chat one-on-one with the other person. You can start chatting with the other person in various ways (post, user list, chat list). You can see when the message was sent, and when the date changes, a date divider is created. When the friend is inputting a message, you can see that they are typing. It also scrolls to the bottom whenever there is a new message. You can visit the code at [ChatRoom](https://github.com/tmintalk/tnt-client/tree/main/src/components/ChatRoom)

### MyPage and UserPage
In MyPage and UserPage, you can see various user information. You can check the amount of money spent so far, the cumulative answers to global questions, and the posts I've written so far. **Using these data, it will be possible to visually show the statistics of users' consumption habits or to give various achievements to increase the fun of using the service.** In addition, the number of likes for a post can be checked only by me, reducing the burden of uploading a post. You can visit the code at [MyPage](https://github.com/tmintalk/tnt-client/blob/main/src/pages/MyPage/index.js) and [UserPage](https://github.com/tmintalk/tnt-client/blob/main/src/pages/UserProfile/index.js)

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
