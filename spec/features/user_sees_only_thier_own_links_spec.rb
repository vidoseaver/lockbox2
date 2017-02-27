RSpec.feature "User visits index " do
  describe "User enters adds a link and only sees thiers" do
    it "adds the link refreshes and shows the link as unread" do
        user = User.create!(email:"vido@gmail.com", password: "password")
        user2 = User.create!(email:"second@user.com", password:"test")
        user2.links.create(title: "Google", url: "http://www.google.com")
        allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

        visit links_path

        fill_in "link[title]", with: "Yahoo"
        fill_in "link[url]" ,  with: "http://www.yahoo.com"

        click_button "Submit"

        expect(page.current_path).to eq(links_path)
        expect(page).to have_content("Link Added!")
        expect(page).to_not have_content("Google")
        expect(page).to_not have_content("www.google.com")
    end
  end
end
