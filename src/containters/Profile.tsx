import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Posts } from '../components/Posts'
import { IState } from '../interfaces/IState'
import '../styles/Profile.scss'
import ExtractName from '../functions/ExtractName'
import { IRouteParams } from '../interfaces/IRouteParams'
import GetProfileState from '../functions/GetProfileState'
import {
  AddPost,
  ChangeName,
  DelPost,
  LikePost,
  SignOut,
  Subscribe,
  Unsubscribe,
} from '../redux/RootReducer'
import FilterUsersPosts from '../functions/FilterUsersPosts'
import GeneratePosts from '../functions/GeneratePosts'
import { ProfileName } from '../components/ProfileName'
import { ProfileButtons } from '../components/ProfileButtons'
import { ProfileLinks } from '../components/ProfileLinks'
import { ProfileSubs } from '../components/ProfileSubs'

export const Profile: React.FC = () => {
  const { id, subs, curId } = useParams<IRouteParams>()

  const users = useSelector((state: IState) => state.users)
  const posts = useSelector((state: IState) => state.posts)
  const dispatch = useDispatch()

  const profileState = GetProfileState(id, users)
  const userPostsIds = FilterUsersPosts([id], posts)
  const userPosts = GeneratePosts(userPostsIds, posts, users)
  const userName = ExtractName(id, users)

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
