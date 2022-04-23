import profile from './profile.png'
export const Post = () => {
    return (
        <div class="post-list">
            <div class="row">
                <div class="col-sm-2">
                    <div class="picture">
                        <img src={profile} alt="Admin" width="150" />
                    </div>
                </div>
                <div class="col-sm-6">
                    <h4>
                        <a hre="#" class="username">Barbao"s slim</a>
                        <label class="label label-info">#BootdeyRules</label>
                    </h4>
                    <h5>
                        <i class="fa fa-calendar"></i>
                        Aug 06, 12:48
                    </h5>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit lectus, efficitur eu eros vel, luctus aliquet est. Sed sit amet ligula non mauris porta dignissim....</p>
                </div>
                <div class="col-sm-4" data-no-turbolink="">
                    <a class="btn btn-info btn-download btn-round pull-right makeLoading" href="#">
                        <i class="fa fa-share"></i> Like
                    </a>
                </div>
            </div>
        </div>
    )

}