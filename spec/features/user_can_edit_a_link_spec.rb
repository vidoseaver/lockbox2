require "rails_helper"

RSpec.feature "User visits index " do
  describe "User adds a link and then edits it" do
    xit "adds the link refreshes and shows the link as unread" do
        user = User.create!(email:"vido@gmail.com", password: "password")
        allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

        visit links_path

        fill_in "link[title]", with: "Yahoo"
        fill_in "link[url]" ,  with: "http://www.yahoo.com"

        click_button "Submit"

        expect(page.current_path).to eq(links_path)
        expect(page).to have_content("Link Added!")
        expect(page).to have_content("Yahoo")
        expect(page).to have_content("http://www.yahoo.com")

        click_button "Edit"

        fill_in "link[title]", with: "Google"
        fill_in "link[url]" ,  with: "http://www.google.com"
        save_and_open_page
        click_button "Submit"

        expect(page).to have_content("Link Changed!")
        expect(page).to have_content("Google")
        expect(page).to have_content("www.google.com")
        expect(page).to_not have_content("Yahoo")
        expect(page).to_not have_content("http://www.yahoo.com")
    end
  end
end
