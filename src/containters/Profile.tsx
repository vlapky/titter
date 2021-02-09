import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IState } from '../interfaces/IState'
import '../styles/Profile.scss'
import { IRouteParams } from '../interfaces/IRouteParams'

import { Posts } from '../components/Posts'
import { ProfileName } from '../components/ProfileName'
import { ProfileButtons } from '../components/ProfileButtons'
import { ProfileLinks } from '../components/ProfileLinks'
import { ProfileSubs } from '../components/ProfileSubs'

import { SignOut } from '../redux/actions/SignOut'
import { LikePost } from '../redux/actions/LikePost'
import { AddPost } from '../redux/actions/AddPost'
import { DelPost } from '../redux/actions/DelPost'
import { ChangeName } from '../redux/actions/ChangeName'
import { Subscribe } from '../redux/actions/Subscribe'
import { Unsubscribe } from '../redux/actions/Unsubscribe'
import PostsFuncs from '../functions/PostsFuncs'

export const Profile: React.FC = () => {
  function GetProfileState(userId: string, users: any) {
    if (userId === users.currentUser) {
      return 'YOUR'
    } else if (users.byId[users.currentUser].subscribedTo.includes(userId)) {
      return 'SUB'
    } else return 'NONE'
  }

  const { id, subs, curId } = useParams<IRouteParams>()

  const users = useSelector((state: IState) => state.users)
  const posts = useSelector((state: IState) => state.posts)
  const dispatch = useDispatch()

  const profileState = GetProfileState(id, users)
  const userPostsIds = PostsFuncs.FilterUsersPosts([id], posts)
  const userPosts = PostsFuncs.GeneratePosts(userPostsIds, posts, users)
  const userName = users.byId[id].name

  const handleLikePost = (id: string) => {
    dispatch(LikePost(id))
  }
  const handleAddPost = (text: string) => {
    dispatch(AddPost(text))
  }
  const handleDelPost = (id: string) => {
    dispatch(DelPost(id))
  }
  const handleChangeName = (text: string) => {
    dispatch(ChangeName(text))
  }
  const handleSub = () => {
    dispatch(Subscribe(id))
  }
  const handleUnsub = () => {
    dispatch(Unsubscribe(id))
  }
  const handleSignOut = () => {
    dispatch(SignOut())
  }

  return (
    <div className="Profile">
      <ProfileLinks subs={subs} curId={curId} />
      <ProfileName
        userName={userName}
        profileState={profileState}
        changeName={handleChangeName}
      />
      <ProfileSubs id={id} users={users} />
      <ProfileButtons
        profileState={profileState}
        handleAddPost={handleAddPost}
        handleSub={handleSub}
        handleUnsub={handleUnsub}
        handleSignOut={handleSignOut}
      />
      <Posts
        posts={userPosts}
        currentUser={users.currentUser}
        likePost={handleLikePost}
        delPost={handleDelPost}
      />
    </div>
  )
}
