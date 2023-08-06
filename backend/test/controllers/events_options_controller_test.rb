require "test_helper"

class EventsOptionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @events_option = events_options(:one)
  end

  test "should get index" do
    get events_options_url
    assert_response :success
  end

  test "should get new" do
    get new_events_option_url
    assert_response :success
  end

  test "should create events_option" do
    assert_difference("EventsOption.count") do
      post events_options_url, params: { events_option: { eventName: @events_option.eventName, options: @events_option.options, voting_event_id: @events_option.voting_event_id } }
    end

    assert_redirected_to events_option_url(EventsOption.last)
  end

  test "should show events_option" do
    get events_option_url(@events_option)
    assert_response :success
  end

  test "should get edit" do
    get edit_events_option_url(@events_option)
    assert_response :success
  end

  test "should update events_option" do
    patch events_option_url(@events_option), params: { events_option: { eventName: @events_option.eventName, options: @events_option.options, voting_event_id: @events_option.voting_event_id } }
    assert_redirected_to events_option_url(@events_option)
  end

  test "should destroy events_option" do
    assert_difference("EventsOption.count", -1) do
      delete events_option_url(@events_option)
    end

    assert_redirected_to events_options_url
  end
end
