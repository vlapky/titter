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
import { PostsFuncs } from '../functions/PostsFuncs'
import { Actions } from '../redux/Actions'
import { IUsers } from '../interfaces/IUsers'

export const Profile: React.FC = () => {
  function GetProfileState(userId: string, users: IUsers) {
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

  return (
    <div className="Profile">
      <ProfileLinks subs={subs} curId={curId} />
      <ProfileName
        userName={userName}
        profileState={profileState}
        changeName={(text) => dispatch(Actions.ChangeName(text))}
      />
      <ProfileSubs id={id} users={users} />
      <ProfileButtons
        profileState={profileState}
        handleAddPost={(text) => dispatch(Actions.AddPost(text))}
        handleSub={() => dispatch(Actions.Subscribe(id))}
        handleUnsub={() => dispatch(Actions.Unsubscribe(id))}
        handleSignOut={() => dispatch(Actions.SignOut())}
      />
      <Posts
        postsView={userPosts}
        currentUser={users.currentUser}
        likePost={(id) => dispatch(Actions.LikePost(id))}
        delPost={(id) => dispatch(Actions.DelPost(id))}
      />
    </div>
  )
}
